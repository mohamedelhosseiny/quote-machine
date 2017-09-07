let quote = document.querySelector('#quote');
let Author = document.querySelector('#Author');
let button = document.querySelector('#button');
let tweet = document.querySelector('#tweet');
let quotation = '<i class="fa fa-quote-left" aria-hidden="true"> </i> '



let colors = [ 'rgb(39, 174, 96)' , 'rgb(52, 34, 36)' , 'rgb(155, 89, 182)' , 'rgb(243, 156, 18)' ,'rgb(22, 160, 133)' ];
let random = Math.floor((Math.random() * 5) )
quote.style.color = colors[random] ;
Author.style.color = colors[random] ;
document.body.style.backgroundColor = colors[random];
tweet.style.backgroundColor = colors[random];
button.style.backgroundColor = colors[random];



	button.addEventListener('click' , function () {
		$.get('https://talaikis.com/api/quotes/random/' , function (argument) {
		quote.style.opacity = '0';
		Author.style.opacity = '0';

		animator();

		quote.innerHTML = (quotation + argument.quote);
		Author.innerHTML = ('- ' + argument.author);

		disapperator();

		colorChangeator();
	})
})

let animator = function () {
	$('#quote').animate({opacity: '0'} , 'slow')
	$('#Author').animate({opacity: '0'} , 'slow')


}

let disapperator = function () {
	$('#quote').animate({opacity: '1'} , 'slow')
	$('#Author').animate({opacity: '1'} , 'slow')

}

let colorChangeator = function () {
	let randomer = Math.floor((Math.random() * 5) )
	quote.style.color = colors[randomer] ;
	Author.style.color = colors[randomer] ;
	document.body.style.backgroundColor = colors[randomer];
	tweet.style.backgroundColor = colors[randomer];
	button.style.backgroundColor = colors[randomer];

}


tweet.addEventListener('click' , function (e) {
	let text = quote.innerText;
	let author = Author.innerText;

	if ( text == '') {
		e.preventDefault();
	}

	else {
		tweet.href = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + '"' + text + '" ' + author ;
	}

})



