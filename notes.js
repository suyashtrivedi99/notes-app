const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

//function to load notes
const loadNotes = function() {

	//if notes empty, return empty object
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()

		return JSON.parse(dataJSON)
	}

	catch {
		return []
	}
}

//function to save notes
const saveNotes = function(notes) {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

//function to add a note
const addNote = function(title, body) {
	
	//load existing notes
	const notes = loadNotes()

	//check for duplicate titles
	const duplicateNotes = notes.filter(function(note) {
		return note.title === title
	})

	//if no duplicates found, add the note
	if(duplicateNotes.length === 0) {

		//add new note
		notes.push({
			title: title,
			body: body
		})

		//save modified array of notes
		saveNotes(notes)

		console.log(chalk.green.inverse('New note added!'))
	}

	else {
		console.log(chalk.red.inverse('Note title already taken!'))
	}
}

//function to remove a note
const removeNote = function(title) {
	
	//load existing notes
	const notes = loadNotes()

	//list out all notes except the matching one
	const newNotes = notes.filter(function(note) {
		return note.title !== title
	})

	//if matching note found, delete it
	if(notes.length > newNotes.length) {

		//save modified array of notes
		saveNotes(newNotes)

		console.log(chalk.green.inverse('Note removed!'))
	}

	else {
		console.log(chalk.red.inverse('No note found with Title: ' + title))
	}
}


module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote
}	