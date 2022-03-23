function clock(){
	var meridiem="PM";
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();


//setting PM and AM
	
	if (hour >= 12){
		meridiem = "PM";
	}
	else{
		meridiem = "AM";
	}

// 12 hr format
	if(hour>12){
		hour = hour - 12;
	}
	else if (hour === 0 ){
		hour = 12;
	}

// putting 0 infront
	if (minute < 10){
		minute = "0" + minute;
	}
	if (second < 10){
		second = "0" + second;
	}

	document.getElementById("t").innerHTML = ( hour + ":" + minute + ":" + second + " " + meridiem);
}
setInterval('clock()',1000);
		