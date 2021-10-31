const db = require('../config/conexion')
const express = require('express')
const router = express.Router()
router.use(express.json())

/**
 * rutas de la api rest producto
   /api/producto 
*/

router.get('/all', (req, res) => {

    const sql = "select * from producto"
    db.query(sql, (err, data) => {
        if (err) return err
        res.json({
            "productos": data,
            "status": "OK",
        })
    })
    res.status(200)
})

router.get('/:id', (req, res) => {

    const id = req.params.id
    const sql = "select * from producto where id=?"
    db.query(sql, id, (err, data) => {
        if (err) {
            return err
        }
        res.json({
            "producto": data,
            "peticion": "OK"
        })
    })

})

router.post('/save', (req, res) => {
    console.log(req.body)
    values = Object.values(req.body)
    const sql = "insert into producto(nombre,color,precio) values(?,?,?)"
    db.query(sql, values, (err, data) => {
        if (err) {
            return err
        }
        res.json({
            "mensaje": "Producto Grabado",
            "Peticion": "OK"
        })
    })

    res.status(201)

})

router.put('/save', (req, res) => {
    const values = Object.values(req.body)
    const sql = "update producto set nombre=?,color=?,precio=? where id=?"
    const val = [values[1], values[2], values[3], values[0]]
    db.query(sql, val, (err, data) => {
        if (err) return err
        res.json({
            "mensaje": "Producto Actualizado",
            "peticion": "OK"
        })
    })

    res.status(201)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const sql = "delete from producto where id=?"
    db.query(sql, id, (err, data) => {
        if (err) return err
        res.json({
            "peticion": "OK"
        })
    })

    res.status(204)
})

module.exports = router

