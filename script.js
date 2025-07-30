//your JS code here. If required.
function daysOfYear(dm) {
	if((dm % 4 ===0 && dm % 100 !== 0) || (dm % 400 === 0)){

		return 366;
	}
	else{
	return 365;
	}
	
}
console.log(daysOfYear(2024))
