const express = require('express');
const 

class Application{
    constructor(){
        this.application =express();
    }
    start(){
        const port = process.env.PORT || 5000
        this.application.listen(port,(err)=>{
            if (err) throw err
            console.log(`Server Started ${port}`)
        })
    }
}

module.exports = Application