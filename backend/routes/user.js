const express = require('express')
const router=express.Router();

router.route('/:id')
.get((req,res)=>{
    res.send("from user"+ req.params.id )
    res.send("from user"+ req.params.id )
})
.put((req,res)=>{
    res.send("from new user"+ req.params.id + req.params.string);
})
module.exports=router;