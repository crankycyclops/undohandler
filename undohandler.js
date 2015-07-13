/*
	UndoHandler -- a simple interface for undoing and redoing changes in a web
	               application.

	Author: James Colannino <crankycyclops@gmail.com>
	https://github.com/crankycyclops/undohandler
*/

function UndoHandler() {

	// stack of changes
	this.history = [];

	// points to the current revision in the change stack
	this.curIndex = 0;
}

/*****************************************************************************/

UndoHandler.prototype = {

	// Adds an item to the undo history.
	insert: function (object) {

		this.history.push(object);
		this.curIndex++;
	},

	// Clears the undo history.
	clear: function () {

		this.history = [];
	},

	// Undoes the latest change.
	undo: function () {

		if (this.history.length && this.curIndex > 0) {
			this.history[this.curIndex - 1].undo();
			this.curIndex--;
		}
	},

	// Redoes the last undone change.
	redo: function () {

		if (this.history.length > 0 && this.curIndex < this.history.length) {
			this.curIndex++;
			this.history[this.curIndex - 1].redo();
		}
	}
}
