var PARSE_APP = "oB30YcPODc7uVg0Pn97d22niIGNOWtaVQbjfjuei";
var PARSE_JS = "kJLYmFjIUxEi58PQ1bc8W6WswabzlRZ7D6dO8e0s";

$(document).ready(function() {
	Parse.initialize(PARSE_APP, PARSE_JS);

	NoteObject = Parse.Object.extend("NoteObject");

	$("#addNoteBtn").on("touchend", function(e) {
		e.preventDefault();
		
		//Grab the note details, no real validation for now
		var title = $("#noteTitle").val();
		var body = $("#noteBody").val();

		var note = new NoteObject();
		note.save({title:title, body:body}, {
			success:function(object) {
				console.log("Saved the object!");
			}, 
			error:function(object,error) {
				console.dir(error);
				alert("Sorry, I couldn't save it.");
			}
		});
	});
});