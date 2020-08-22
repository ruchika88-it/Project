/*Program for Thumbnail generation
Microprogram can be found in routes*/

const imgThumbnail = require('image-thumbnail');
 (async()=>{
    try {
        let options = { width: 50, height: 50, responseType: 'base64' }
        const thumbnail = await imgThumbnail('../resources/images/img.jfif',options);
        console.log("thumbnail"+thumbnail);
    } catch (err) {
        console.error(err);
    } 
 })();
 //resources/images/img.jfif