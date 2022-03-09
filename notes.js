const fs = require('fs')
const { title } = require('process')
const getMessage = function(){
return "your notes!"
}
const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
      return note.title===title
    })
    
    if(duplicateNotes.length===0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
}else{
    console.log("duplicate notes title not allowed")
}
}
    const saveNotes = function(notes){
        const dataJSON =JSON.stringify(notes)
        fs.writeFileSync("notes.json",dataJSON)
    }
const loadNotes = function(){
    try{
const dataBuffer = fs.readFileSync("notes.json")
const dataString = dataBuffer.toString();
const notes = JSON.parse(dataString);
return notes
    }catch(e){
        console.log(e)
        return []
    }
}
const removeNote = function(){
const notes = loadNotes()
const notesTokeep = notes.filter(function(note){
return note.title !== title
})
if(notes.length === notesTokeep.length){
   return  console.log("note doesn't exists")
}
saveNotes(notesTokeep)
}
module.exports = {
getMessage:getMessage,
addNote:addNote,
removeNote:removeNote,
}