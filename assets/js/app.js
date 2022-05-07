var cl = console.log;

var DC = document.getElementById("DC");


function digitalClock(){
	var date = new Date();
    var hours = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var session ="AM";
	
	if(hours > 12){
		session = "PM";
		hours = hours - 12;
	}
	// if(hours < 10){
		// hours = "0" + hours;
	// }
	// if(min < 10){
		// min = "0" + min;
	// }
	// if(sec < 10){
		// sec = "0" + sec;
	// }


	// var result = hours + " : " + min + " : " + sec +" : " + session;
var result = `${setzeros(hours)}:${setzeros(min)}:${setzeros(sec)} ${session}`;
	DC.innerHTML = result;
	setTimeout(digitalClock,1000);
}
digitalClock();

function setzeros(x){
	return x =(x < 10 )? "0"+x:x 
}