// alert("helloworld");

//최초 DOM생성시 li에 이벤트 할당 필요 
//li선택시 alert pop-up 수행 

//최초 이벤트 할당 부분
document.addEventListener('DOMContentLoaded', function(evt){
	// alert("helloworld");

	//li선택시 이벤트 할당
	var liElement = document.querySelectorAll('li');
	for(var i = 0; i < liElement.length; i++){
		liElement[i].addEventListener('click', function(evt){
			alert("helloworld");
		})
	}

	//inputButton 이벤트 할당
	var inputElement = document.querySelector('input');
	var inputButton = inputElement.nextElementSibling;
	inputButton.addEventListener('click', inputFunction)
	inputElement.addEventListener('keypress', function(evt){
		var key = evt.which || evt.keyCode
		if(key === 13) inputFunction(evt);
	})

	//deleteButton 이벤트 할당
	// var removeElement = document.querySelectorAll('.remove');
	// for(var i = 0; i < removeElement.length; i++){
	// 	liElement[i].addEventListener('click', function(evt){
	// 		alert("removeElement");
	// 	})
	// }
})

var inputFunction = function (evt) {
	//Element 추가 
	//추가된 Element Event 할당
	var text = evt.target.parentElement.firstElementChild;
	// alert(text.value);
	var tempHTML = '<li class="height2"><div class="width100 blockVerticalCenter todo-item"><div class="disInlineBlock width10 remove">×</div><div class="disInlineBlock width70">'+ text.value+'</div><div class="disInlineBlock width10 blockRight check">✓</div></div></li>'
	var ulElement = document.querySelector('ul');
	ulElement.insertAdjacentHTML('beforeend',tempHTML)

	//li클릭 이벤트 신규 할당
	ulElement.lastElementChild.addEventListener('click', function(evt) {
		var liElement = evt.target
		while(liElement.tagName !== 'LI') liElement = liElement.parentElement
		
		liElement.children[0].children[1].classList.toggle('strikethrough')
		// console.log(liElement)
		//alert("helloworld again");
	})


	//remove클릭 이벤트 신규 할당
	ulElement.lastElementChild.firstElementChild.firstElementChild.addEventListener('click', function(evt) {
		deleteFunction(evt);
	})

	text.value="";
}

var deleteFunction = function(evt) {
	var liElement = evt.target.parentElement.parentElement;
	var ulElement = liElement.parentElement;
	ulElement.removeChild(liElement);
	evt.stopPropagation();
}

var strikeFunction = function(evt) {

}