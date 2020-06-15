const fs = require('fs')
const chalk = require('chalk')
const listNotes = () => {
    const notes = loadNotes()
        //console.table -> more organized

    console.table(notes)
        // using forEach is more flexible
        // notes.forEach(el => {
        //     console.log(`${chalk.bold(el.title)} : ${chalk.white.inverse(el.body)}`)
        // })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(el => el.title === title)

    console.log(note ? `${chalk.bold(note.title)} : ${chalk.white.inverse(note.body)}` : chalk.red("no note found"))

}
const addNote = (title, body) => {
    let notes = loadNotes()
    const duplicateNotes = notes.filter((el) => title == el.title)
        // if duplicated notes = 0 , there is no duplicated ones
    if (!duplicateNotes.length) {
        notes.push({
            title: title,
            body: body
        });
        if (saveNotes(notes)) console.log(chalk.green.inverse("note created"))
        else console.log(chalk.red.inverse("problem in creating the note"))

    } else {
        console.log('note title already taken')
    }
}
const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'));
    } catch (e) {
        return []
    }

}
const removeNote = (title) => {
    let notes = loadNotes()
        // checker of note
    let found = false
    notes = notes.filter((el) => {
        if (el.title !== title) {
            return true
        } else found = true
    })
    if (found) {
        if (saveNotes(notes)) console.log(chalk.green.inverse.bold('Note deleted'))
    } else console.log(chalk.red.inverse.bold('Note not found!'))



}
const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    try {
        fs.writeFileSync('notes.json', dataJSON)
        listNotes()
        return true
    } catch (e) {
        return false
    }


}


module.exports = {
    loadNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}