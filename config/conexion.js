const mysql=require('mysql')
const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'dbusb'
})

conexion.connect((err)=>{

    if(err){
        console.log("Error de Conexion")
    }
    else{
      console.log("conexion exitosa")
    }    
})

module.exports=conexion
