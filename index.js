const score = document.querySelector('.score');
const container = document.querySelector('.container');
const show = document.querySelector('.show');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const hide = document.querySelector('.hide');
const hhide = document.querySelector('.hhide');
const message = document.querySelector('.message');
const play = document.querySelector('.play');
const rules = document.querySelector('.rules');
const rulesCont = document.querySelector('.rules-cont');
const rulesClose = document.querySelector('.rules-close');
const contClick = document.querySelectorAll('.cont-click');
const button = document.querySelector('button');
const si = document.querySelector('.si');
const el = document.querySelectorAll('.el');
let userScore = 0;

const elements = ['rock', 'paper', 'scissors'];

contClick.forEach(item => {
	item.addEventListener('click', () => {
		const chosen = item.firstElementChild.id;
		shit(chosen);
	});
});

function shit(chosen) {
	container.style.display = 'none';
	show.style.display = 'flex';
	hide.innerHTML = `
		<div class="user-cont">
			<img
				src="img/icon-${chosen}.svg"
				class="el ${chosen}"
				id="${chosen}"
			/>
			<span class="white"></span>
			<span class="bright bright-${chosen}"></span>
			<span class="dark dark-${chosen}"></span>
    	</div>
	`;
	const rand = () => Math.floor(Math.random() * 3);
	const random = rand();
	const ran = elements[random];
	const shit = chosen === ran ? elements[(random + 1) % 3] : ran;

	setTimeout(() => {
		hhide.innerHTML = `
			<div class="com-cont">
				<img src="img/icon-${shit}.svg" class="el ${shit}" id="${shit}" />
				<span class="white"></span>
				<span class="bright bright-${shit}"></span>
				<span class="dark dark-${shit}"></span>
			</div>
		`;
		setTimeout(() => {
			win(chosen, shit);
		}, 1000);
	}, 1000);
}

function win(user, com) {
	play.style.display = 'flex';
	if (
		(user === 'paper' && com === 'scissors') ||
		(user === 'rock' && com === 'paper') ||
		(user === 'scissors' && com === 'rock')
	) {
		message.innerHTML = 'you lost';
	}
	if (
		(user === 'scissors' && com === 'paper') ||
		(user === 'paper' && com === 'rock') ||
		(user === 'rock' && com === 'scissors')
	) {
		message.innerHTML = 'you won';
		score.innerHTML = +score.innerHTML + 1;
	}
}

button.addEventListener('click', () => {
	message.innerHTML = '';
	hide.innerHTML = '';
	hhide.innerHTML = '';
	play.style.display = 'none';
	show.style.display = 'none';
	container.style.display = 'block';
});

rules.addEventListener('click', () => (rulesCont.style.display = 'flex'));
rulesClose.addEventListener('click', () => (rulesCont.style.display = 'none'));
