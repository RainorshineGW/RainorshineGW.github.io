(function ($) {
	var slideList = []
	var prefix = '/images/slide/background';
	var ext = '.' + 'jpg';
	var maxCount = 6;
	for(var k = 0; k < 6; k++) {
		var n = Math.floor(Math.random() * maxCount) + 1
		console.log(n);
		while(slideList.indexOf(n) !== -1) {
			n = Math.floor(Math.random() * maxCount) + 1
			console.log(n);
		}
		slideList.push(n)
	}
	var cdSlideShow = $('.cb-slideshow')
	console.log(cdSlideShow);
	cdSlideShow.find('span').each(function (i, span) {

		$(this).css('backgroundImage', 'url(\'' + prefix + slideList[i] + ext + '\')')
	})
})($)