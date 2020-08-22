const express = require("express");
const route = express.Router();
const imgThumbnail = require('image-thumbnail');
const login=require("../routes/login.js");
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//Getting thumbnail from image
route.get("/prodThumbnail",login,async(req, res) => {
    (async()=>{
        try {
            let options = { width: 50, height: 50, responseType: 'base64' }
            const thumbnail = await imgThumbnail('http://drive.google.com/uc?export=view&id=1l8KqqnQ6znppl5YigEISY4R3YyCOhkq-',options);
            res.status(200).send(thumbnail);
        } catch (err) {
            res.status(404).send("Error" + err);
        } 
     })();
});
module.exports = route;