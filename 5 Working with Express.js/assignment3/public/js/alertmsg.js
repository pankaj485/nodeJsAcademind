let clickMe = document.querySelector(".user__btn");

// let clickThis = document.querySelector(".user__btn");

const messages = [
	"hello",
	"sup",
	"ya clicked",
	"have a good day",
	"why you clicked ?",
	"heyy",
	"no where to run",
	"watch thiss !!",
];

const showMessage = () => {
	const randomIndex = Math.ceil(Math.random() * 7);
	alert(messages[randomIndex]);
};

clickMe.addEventListener("click", showMessage);
