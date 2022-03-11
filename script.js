
			var startingMinutes = 25;

// _____________________________break value onload______________________________
			
			var breakCount = 5;

			var breakLen = document.getElementById("break-length");

			breakLen.innerHTML = breakCount;

// _____________________________break value______________________________

// _____________________________session value______________________________

			var sessionCount = 25;

			var sessionLen = document.getElementById("session-length");

			sessionLen.innerHTML = sessionCount;

// _____________________________session value______________________________

// __________________________time left onload ____________________

	let timedefault = sessionCount + ":" + "00";

	var timeLeft = document.getElementById("time-left");
	
	timeLeft.innerHTML = timedefault;

// __________________________time left onload ____________________


function upDate(myArg) {


		if (myArg === "decre" && breakCount > 1 ){

			breakCount--;

			breakLen.innerHTML = breakCount;
		}

		else if (myArg === "incre" && breakCount < 60 ){

			breakCount++;

			breakLen.innerHTML = breakCount;
		}

// _______________________________________________________


		let sessionLen = document.getElementById("session-length");

		if (myArg === "seDecre" && sessionCount > 1 ){

			sessionCount--;

			sessionLen.innerHTML = sessionCount;

			startingMinutes = sessionCount; 

			console.log("startingMinutes inside" + startingMinutes);

			// timeLeftVal.innerHTML = sessionCount;
		}

		else if (myArg === "seIncre" && sessionCount < 60 ){

			sessionCount++;

			sessionLen.innerHTML = sessionCount;

			startingMinutes = sessionCount; 
			console.log("startingMinutes inside" + startingMinutes);
		}

		

		let timedefault = sessionCount + ":" + "00";

		var timeLeft = document.getElementById("time-left");
		
		timeLeft.innerHTML = timedefault;



}

// ___________________________________________________________________

// ____________________________________________________________________________


	// Start stop function:
	let timer;

	let timeStatus = "begin";

	function startStop() {
		
		if(timeStatus === "begin" || timeStatus === "timerStopped"){
			
			console.log("time started");
			timeStatus = "counting";
			timer = setInterval(updateTime, 1000);
				

			
		}
		else if (timeStatus === "counting" || timeLeft.innerHTML === parseInt("00") + ":" + parseInt("00")) {

			console.log("timer Stopped")
			timeStatus = "timerStopped";
		
			clearInterval(timer);


		}
	}

// ______________________________________________________________

	//Countdown timer function:

	// var sessionLen = document.getElementById("session-length");

	// 		var sessionCount = 25;

	// 		sessionLen.innerHTML = sessionCount;

	console.log("startingMinutes outside " + startingMinutes);


	// var startingMinutes = sessionCount;

	var time = startingMinutes * 60;

	document.write(time);
	document.write('<br>');

	//For stoping interval:
	// var intrId = setInterval(updateTime, 1000);	


		function updateTime() {
			
			let minutes = Math.floor(time / 60);
			let seconds = time % 60;
			console.log(minutes);

			// making sure that below 10 single minute value is not being shown:
			minutes = minutes < 10 ? "0" + minutes : minutes;

			// making sure that below 10 single value is not being shown:
			seconds = seconds < 10 ? "0" + seconds : seconds;

			let timeRemaining = document.getElementById("time-left");

			//Stoping interval:

			if (timeRemaining.innerHTML == "00:00") {

				let timer = setInterval(updateTime, 1000);
				clearInterval(timer)



			}
			else {

				timeRemaining.innerHTML = minutes + ":" + seconds;
			}

			 // timeLeft.innerHTML = sessionLen.innerHTML
			

			time--;
		}

// ____________________________________________________________________________

// ______________________________________________________________


	// Reset button function:


	function reset() {

		var breakCount = 5;
		
		breakLen.innerHTML = breakCount;


		var sessionCount = 25;

		sessionLen.innerHTML = sessionCount;

		clearInterval(timer);

		timeLeft.innerHTML = timedefault;

	}	


// ____________________________________________________________________________	
