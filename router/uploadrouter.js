const express = require("express")
const router = express.Router()
const multer = require("multer")
router.use(express.json())
const fs = require('fs-extra')

/**
 * storage
 */

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        let path="./uploads/"
        //fs.mkdirSync(path)
        cb(null,path)
    },    
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }

})
const upload = multer({storage:storage})
router.post("/upload",upload.single("file"),(req,res)=>{

    const uploadedfile = req.file.fieldname
    let mensaje="Problemas al Subir el Archivo"
    if(uploadedfile){
        mensaje="Archivo Subido con Exito!!"
    }
    res.json({
        "mensaje":mensaje
    })
})

module.exports=router