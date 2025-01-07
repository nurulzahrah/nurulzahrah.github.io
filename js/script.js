let word = document.querySelectorAll(".word");
word.forEach((word)=> {
	let letters = word.textContent.split("");
	word.textContent="";
	letters.forEach((letter)=>{
		let span = document.createElement("span");
		span.textContent = letter;
		span.clasName = "letter";
		word.append(span);
	});
});

let currentWordIndex = 0;
let maxWordIndex = word.length -1;
word[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
	let currentWord = word[currentWordIndex];
	let nextWord = currentWordIndex === maxWordIndex ? word[0] : word[currentWordIndex + 1];

	Array.from(currentWord.children).forEach((letter,i)=>{
		setTimeout(()=>{
			letter.className = "letter out";
		}, i * 80);
	});
	nextWord.style.opacity = "1";
	Array.from(nextWord.children).forEach((letter,i)=>{
		letter.className = "letter behind";
		setTimeout(()=>{
			letter.className = "letter in";
		}, 340 + i * 80);
	});
	currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

changeText();
setInterval(changeText,3000)



// CIRCLE SKILLS
// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
// 	var dots = elem.getAttribute("data-dots");
// 	var marked = elem.getAttribute('data-percent');
// 	var percent = Math.floor(dots*marked/100);
// 	var points = "";
// 	var rotate = 360 / dots;

// 	for(let i = 0 ; i < dots ; i++){
// 		point += '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
// 	}
// 	elem.innerHTML = points;
// })

// BOOTCAMP DATA ANALYST
var mixer = mixitup('.portfolio-gallery');


// ACTIVE MENU
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
	let len = section.length;
	while(--len && window.scrollY + 97 < section[len].offsetTop){}
	menuLi.forEach(sec => sec.classList.remove("active"));
	menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


// STICKY NAVBAR
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
	header.classList.toggle("sticky",window.scrollY > 50)
})

// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=> {
	menuIcon.classList.toggle("bx-x");
	navlist.classList.toggle("open");
}

window.onscroll = ()=> {
	menuIcon.classList.remove("bx-x");
	navlist.classList.remove("open");
}


// PARAL LAX
const observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry)=>{
		if(entry.isIntersecting){
			entry.target.classList.add("show-items");
		}else{
			entry.target.classList.remove("show-items");
		}
	});
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

