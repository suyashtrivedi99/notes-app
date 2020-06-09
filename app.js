const chalk = require('chalk')
const yargs = require('yargs')
const notesUtil = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Adding commands using yargs
//Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		},

		body: {
			describe: 'Note Body',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		
		//add the note
		notesUtil.addNote(argv.title, argv.body)
	}
})

//Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	handler: function() {
		console.log('Removing the note!')
	}
})

//Create list command
yargs.command({
	command: 'list',
	describe: 'List your notes',
	handler: function() {
		console.log('Listing out all notes!')
	}
})

//Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	handler: function() {
		console.log('Reading a note!')
	}
})

yargs.parse()