// alert("helloworld");

//최초 DOM생성시 li에 이벤트 할당 필요 
//li선택시 alert pop-up 수행 

//진입점
document.addEventListener('DOMContentLoaded', function(evt){
	// alert("helloworld");
	var liElement = document.querySelectorAll('li');
	for(var i = 0; i < liElement.length; i++){
		liElement[i].addEventListener('click', function(evt){
			alert("helloworld");
		})
	}

	var inputElement = document.querySelector('input');
	var inputButton = inputElement.nextElementSibling;
	inputButton.addEventListener('click', inputFunction)
	inputElement.addEventListener('keypress', function(evt){
		var key = evt.which || evt.keyCode
		if(key === 13) inputFunction(evt);
	})
})

var inputFunction = function (evt) {
	//Element 추가 
	//추가된 Element Event 할당
	var text = evt.target.parentElement.firstElementChild;
	// alert(text.value);
	var tempHTML = '<li class="height2"><div class="width100 blockVerticalCenter todo-item"><div class="disInlineBlock width10 remove">×</div><div class="disInlineBlock width70">'+ text.value+'</div><div class="disInlineBlock width10 blockRight check">✓</div></div></li>'
	var ulElement = document.querySelector('ul');
	ulElement.insertAdjacentHTML('beforeend',tempHTML)
	ulElement.addEventListener('click', function(evt) {
		alert("helloworld again");
	})
	text.value="";
}