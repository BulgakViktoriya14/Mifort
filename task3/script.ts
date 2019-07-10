import { parse } from 'papaparse';
import { readFileSync, writeFileSync } from 'fs';
import { config } from  './config';

let users: object[] = [];
let validData: object[] = [];
let invalidData: object[] = [];
const INDEX_REMOVE: number = 0;
const COUNT_REMOVE: number = 1;

function parseData(file) {
	parse(file, {complete: (result) => {
		result.data.splice(INDEX_REMOVE, COUNT_REMOVE);
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
	const FILE = readFileSync('./data/Users.csv', 'utf8');
	parseData(FILE);
	users.forEach((user: object) => { 
		let testResults : boolean[] = [];
		for(let key in user) {
			config.forEach((obj:object) => {
				if(key === obj['name']) {
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

function checkLength(length : string, data : string) : boolean {
	let arrLength: string[] = length.split(','); 
	let startLength: number = Number(arrLength[0]);
	let endLength: number = Number(arrLength[1]);
	let dataLength: number = data.length;
	if(dataLength >= startLength && dataLength <= endLength) {
		return true;
	} 
	console.log(`Error!The length of this field is not correct: ${data}`);
	return false;
}

function checkRequire(data : string) : boolean {
	if(data != '') {
		return true;
	} 
	console.log(`Error!This field must not be empty: ${data}`);
	return false;
}

function checkTemplate(templ : string, data : string) : boolean {
	if(new RegExp(templ).test(data)) {
		return true;
	} 
	console.log(`Error!This field does not match the pattern: ${data}`);
	return false;
}

function checkUnique(data : string, k : string) {
	let valuesKey: string[] = [];
	users.forEach(function(user : object) {
		for(let key in user) {
			if(key === k) {
				valuesKey.push(user[key]);
			}
		}
	})
	let newValuesKey = valuesKey.filter(function(value : string) {
		return value === data;
	})
	if(newValuesKey.length === 1) {
		return true;
	}
	console.log(`Error!This field is not unique: ${data}`);
	return false;
}

function checkFirstLetter(data : string) {
	if(data[0].toUpperCase() === data[0]) {
		return true;
	} 
	console.log(`Error!This field begins with a small letter: ${data}`);
	return false;
}

function writeDataInArray(results : boolean[],user : object) : void {
	let length : number = results.length;
	let resultsTrue = results.filter(function(res : boolean) {
		return res === true;
	})
	if(resultsTrue.length === length) {
		validData.push(user);
	} else {
		invalidData.push(user);
	}
}

function writeDataInFile(array : object[], path: string) : void {
	writeFileSync(path, JSON.stringify(array, null) , 'utf-8');
}

startValidate(users,config)