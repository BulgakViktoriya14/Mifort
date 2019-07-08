import { parse } from 'papaparse';
import { readFileSync, writeFileSync } from 'fs';
import { config } from  './config';

let users: object[] = [],
indexRemove: number = 0,
countRemove: number = 1,
validData: object[] = [],
invalidData: object[] = [];

function parseData(file) {
	parse(file, {complete: (result) => {
		result.data.splice(indexRemove, countRemove);
		result.data.forEach((user: object) => {
			users.push({
				ID: user[0],
				Name:  user[1],
				Surname:  user[2],
				Mail:  user[3],
				DateRegistration:  user[4],
				Phone: user[5],
			})
		})
	}
	});
}

function startValidate(users : object[], config : object[]) : void {
	const file = readFileSync('./data/Users.csv', 'utf8');
	parseData(file);
	users.forEach((user: object) => { 
		let testResults : boolean[] = [];
		for(let key in user) {
			config.forEach((obj:object) => {
				if(key == obj['name']) {
					testResults.push(...validateData(user[key],obj['validators'],key));
				}
			})
		}
		writeDataInArray(testResults, user);
	})
	writeDataInFile(validData,'./data/valid data.txt');
	writeDataInFile(invalidData,'./data/invalid data.txt');
}

function validateData(data : string, rules: object, key: string) : Array<boolean> {
	let arrayChecks : boolean[] = [];
	for(let rule in rules) {
		switch(rule) {
			case "length":
				arrayChecks.push(checkLength(rules[rule],data));
				break;
			case "require" :
				arrayChecks.push(checkRequire(data));
				break;
			case "template" :
				arrayChecks.push(checkTemplate(rules[rule], data));
				break;
			case "unique" :
				arrayChecks.push(checkUnique(data, key));
				break;
			case "firstLetter" :
				arrayChecks.push(checkFirstLetter(data));
		}
	} 
	return arrayChecks;
}

function checkLength(len : string, data : string) : boolean {
	let arrLen: string[] = len.split(','), 
	startLen: number = Number(arrLen[0]),
	endLen: number = Number(arrLen[1]),
	dataLen: number = data.length;
	if(dataLen >= startLen && dataLen <= endLen) {
		return true;
	} else { 
		console.log(`Error!The length of this field is not correct: ${data}`);
		return false;
	}
}

function checkRequire(data : string) : boolean {
	if(data != '') {
		return true;
	} else {
		console.log(`Error!This field must not be empty: ${data}`);
		return false;
	}
}

function checkTemplate(templ : string, data : string) : boolean {
	if(new RegExp(templ).test(data)) {
		return true;
	} else {
		console.log(`Error!This field does not match the pattern: ${data}`);
		return false;
	}
}

function checkUnique(data : string, k : string) {
	let valuesKey: string[] = [], count : number = 0;
	users.forEach(function(user) {
		for(let key in user) {
			if(key == k) {
				valuesKey.push(user[key]);
			}
		}
	})
	valuesKey.forEach(function(value) {
		if(data == value) {
			count++;
		}
	})
	if(count == 1) {
		return true;
	} else {
		console.log(`Error!This field is not unique: ${data}`);
		return false;
	}
}

function checkFirstLetter(data : string) {
	if(data[0].toUpperCase() == data[0]) {
		return true;
	} else {
		console.log(`Error!This field begins with a small letter: ${data}`);
		return false;
	}
}

function writeDataInArray(results : boolean[],user : object) {
	let len : number = results.length, k : number = 0;
	results.forEach(function(res : boolean) {
		if(res) {
			k++;
		}
	})
	if(k == len) {
		validData.push(user);
	} else {
		invalidData.push(user);
	}
}

function writeDataInFile(array : object[], path: string) {
	writeFileSync(path, JSON.stringify(array, null) , 'utf-8');
}

startValidate(users,config)