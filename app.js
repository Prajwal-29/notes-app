 const fs = require('fs')
 const  yargs = require("yargs")
 const notes =require("./notes.js")
//add remove read list
yargs.command ({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"to add a note",
            demandOption:true,
            type:"string",
        },
        body:{
            describe:"its a body",
            demandOption:true,
            type:"string",
        }
        
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    
    }
  })
  
yargs.command ({
    command:"remove",
    describe:"remove a note",
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:"string",
        }
        
    },
    handler:function(argv){
        notes.removeNote(argv.title)
    
    }
  })
  yargs.command ({
    command:"read",
    describe:"read a note",
    handler:function(){
        console.log("reading note")
    
    }
  })
  yargs.command ({
    command:"list",
    describe:"list a note",
    handler:function(){
        console.log("listing note")
    
    }
  })
  console.log(yargs.argv)