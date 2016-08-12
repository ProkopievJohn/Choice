function Choice(el) {
	'use strict';
	this.choiceEl = el;
	this.choiceAddEL();
}

Choice.prototype.choiceAddEL = function () {
	'use strict';
	this.choiceEl.addEventListener('click', this.choice.bind(this));
};

Choice.prototype.choice = function (e) {
	'use strict';
	if (e.target.id === 'doing') this.choiceDo();
	if (e.target.id === 'again') this.choiceClean();
};

Choice.prototype.choiceDo = function (e) {
	'use strict';
	var first = document.querySelector('#firsttextarea'),
			second = document.querySelector('#secondtextarea');
	if (first.value === '' || second.value === '') {
		document.querySelector('.choice').innerHTML = "WHAT?";
	} else {
		document.querySelector('.response').innerHTML = Math.random() < 0.5 ? first.value : second.value;
	}
};

Choice.prototype.choiceClean = function () {
	'use strict';
	document.querySelector('#firsttextarea').value = '';
	document.querySelector('#secondtextarea').value = '';
	document.querySelector('.choice').innerHTML = 'OR';
	document.querySelector('.response').innerHTML = 'response';
};

window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	new Choice(document.querySelector('.buttons'));
});
