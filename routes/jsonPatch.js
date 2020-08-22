const express = require("express");
const jsonPatch = require('fast-json-patch');
const route = express.Router();
const login=require("../routes/login.js");
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//Getting output of jsonPatch
route.get("/operations",login, async (req, res) => {
    try {
        let jsonDoc = req.body;
        console.log("jsonDoc"+JSON.stringify(jsonDoc));
        let patch = [
            { operation: "replace", path: "/firstName", value: "Aarouhi" },
            { operation: "add", path: "/lastName", value: "Chauhan" },
            { operation: "add", path: "/contactDetails/phoneNumbers/0", value: { number: "9878453423" } }
        ];
        jsonDoc = jsonPatch.applyPatch(jsonDoc, patch).newjsonDoc;
        res.status(200).send("Json after Patching" + jsonDoc);
    } catch (err) {
        res.status(404).send("Error" + err)
    }

});
module.exports = route;