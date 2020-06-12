var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
console.log("in javascript file")
if(signUpButton){
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
}
if(signInButton){
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
	});
}