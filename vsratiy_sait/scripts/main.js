setInterval(() => {
    const currentOpacity = document.getElementById('magic').style.opacity || 1;
    document.getElementById('magic').style.opacity = ((parseInt(currentOpacity)) ? 0 : 1);	
}, 500)


setInterval(() => {
	const footerText= 'Бесплатно без смс и регистрации'; 
	const currentTextLength = document.getElementById('run').textContent.length;
	
	if (currentTextLength < footerText.length) {
		document.getElementById('run').textContent = footerText.slice(0, currentTextLength + 1);
	} else {
		document.getElementById('run').textContent = '';
	}
	
}, 100)

test = () => {
	const names = {
		1: 'пирожочек с капустой',
		2: 'загадочный пирожочек',
		3: 'румяный пирожочек',
		4: 'пирожочек с мясом', 
		5: 'пирожок с повидлом', 
		6: 'пирожочек с яблочком',
		7: 'вишнёвый пирожочек', 
		8: 'самый любимый пирожочек', 
	}
	
	let num = Math.round(0.5 + Math.random() * 8);
	
	document.getElementById('pirozhok-picture').src = `images/pirozhki/${num}.png`;
	
	document.getElementById('result').textContent = `Сегодня ты ${names[num]}!!!`;
}