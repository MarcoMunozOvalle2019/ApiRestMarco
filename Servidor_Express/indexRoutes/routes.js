
const express = require('express');
const router = express.Router();
const EjecutarController = require('../src/app/components/consultas/consultas.controller');

router.get('/api/marco',async (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    res.setHeader('Access-Control-Allow-Credentials', true); 
    const output = await EjecutarController.executeTransfer(req)
    res.json(output)
});


module.exports=router;