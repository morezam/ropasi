const score = document.querySelector('.score');
const container = document.querySelector('.container');
const show = document.querySelector('.show');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const hide = document.querySelector('.hide');
const hhide = document.querySelector('.hhide');
const message = document.querySelector('.message');
const button = document.querySelector('button');
const si = document.querySelector('.si');
const el = document.querySelectorAll('.el');
let userScore = 0;

const elements = ['rock', 'paper', 'si'];

el.forEach(item => {
	item.addEventListener('click', e => {
		const chosen = e.target.innerText;
		shit(chosen);
	});
});

function shit(chosen) {
	container.style.display = 'none';
	hide.innerHTML = chosen;
	const ran = Math.floor(Math.random() * 3);
	setTimeout(() => {
		hhide.innerHTML = elements[ran];
		setTimeout(() => {
			win(chosen, elements[ran]);
		}, 1000);
	}, 1000);
}

function win(user, com) {
	if (
		(user === 'paper' && com === 'si') ||
		(user === 'rock' && com === 'paper') ||
		(user === 'si' && com === 'rock')
	) {
		message.innerHTML = 'computer won';
	}
	if (
		(user === 'si' && com === 'paper') ||
		(user === 'paper' && com === 'rock') ||
		(user === 'rock' && com === 'si')
	) {
		message.innerHTML = 'user won';
		score.innerHTML = +score.innerHTML + 1;
	}
	if (user === com) {
		message.innerHTML = 'equal';
	}
}

button.addEventListener('click', () => {
	message.innerHTML = '';
	hide.innerHTML = '';
	hhide.innerHTML = '';
	container.style.display = 'block';
});

setTimeout(() => {
	console.log('hello');
}, 2000);
