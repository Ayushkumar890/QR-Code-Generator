import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
.prompt([
    {
        message: "Type your URL to generate your qr-code:",
        name:"URL",
    }
])
.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('image.png'));
 
    
})


.catch((error)=>{
    if(error.isTtyError){

    }
    else{

    }
});

