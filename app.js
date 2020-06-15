const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0')
    // add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            //demandOption make the param required
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "title of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler() {
        notes.listNotes()
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse()

////////////////////////////////////////////////////////
// //process.argv -> contains the params
// const command = process.argv[2]

// if (command == 'add') {
//     console.log(process)
// }

// console.log(chalk.green('Hello God'))
////////////////////////////////////////////////////////
// const validator = require('validator')
// console.log(validator.isURL('terceirob.000webhostapp.com'))
// console.log(validator.isEmail('rafas.@as'))
////////////////////////////////////////////////////////
// const notes = require('./notes')
// let str = notes.getNotes().split(' ').map((el, index, array) => {
//     if (index == (array.length - 1)) return chalk.bold(el)
//     else return el
// }).join(" ")

// console.log(chalk.rgb(255, 255, 255).inverse.underline(str))
///////////////////////////////////////////////////////
//const fs = require('fs')
// const utils = require('./utils')
// console.log(utils.calc(2, 4), utils.name)