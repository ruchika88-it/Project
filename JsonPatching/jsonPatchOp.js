/* Program for json Patching
Json Patching allows to update JSON jsonDoc with requested changes by various operationerations
With the help of json Patching various operationerations can be done on json object like replacing , adding
new value in json.  Micro program for jsonPatching has been added in routes*/

let jsonPatch=require('fast-json-patch')
let jsonDoc = { firstName: "Ritik", contactDetails: { phoneNumbers: [] } };
let patch = [
  { operation: "replace", path: "/firstName", value: "Aarouhi" },
  { operation: "add", path: "/lastName", value: "Chauhan" },
  { operation: "add", path: "/contactDetails/phoneNumbers/0", value: { number: "9878453423" }  }
];
//jsonDoc = jsonPatch.applyPatch(jsonDoc, patch).newjsonDoc;
jsonPatch.applyPatch( jsonDoc, patch );
console.log("jsonDoc is"+ JSON.stringify(jsonDoc));