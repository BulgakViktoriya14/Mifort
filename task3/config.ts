export let config : object[]  = [
{
	name: "ID",
	type: "id",
	validators: {length: "1,4", require: "require", unique : "unique"}
},
{
	name: "Name",
	type: "string",
	validators: {length: "1,12", require: "require", firstLetter : "big"}
},
{
	name: "Surname",
	type: "string",
	validators: {length: "1,12", require: "require", firstLetter : "big"}
},
{
	name: "Mail",
	type: "mail",
	validators: {length: "6,18", require: "require", template: "^[0-9a-zA-Z-\\.]+\@[0-9a-zA-Z-]{2,}\\.[a-zA-Z]{2,}$"}
},
{
	name: "DateRegistration",
	type: "date",
	validators: {template: "^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[1,3-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$", require: true}
},
{
	name: "Phone",
	type: "phone",
	validators: {length: "12,15", require: "require", template: "^\\+?(375)\\s?\\d{2}\\s?\\d{7}$"}
},
]
