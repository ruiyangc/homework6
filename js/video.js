var video;

function getVid(){
	video = document.querySelector("#myVideo")
	slider = document.getElementById("volumeSlider")
	output = document.getElementById("volume")
	output.innerHTML = slider.value + "%"; 
}

function playVid() { 
	video.play()
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	speed = video.playbackRate
	if (speed > 0.2) {
		speed = (speed - 0.2).toFixed(1)
	}
	else {
		console.log("Cannot be more slowed");
	}
	video.playbackRate = speed
  	console.log("Speed is " + speed);
} 

function increaseSpeed() {
	speed = video.playbackRate
	speed = (speed + 0.25).toFixed(2)
	video.playbackRate = speed
	console.log("Speed is "+ speed);
} 

function skipAhead() {
	duration = video.duration
	current = video.currentTime
	if (current + 60 < duration) {
		video.currentTime = current + 60
	}
	 else {
	 	video.currentTime = 0
	 	video.playbackRate = 1
	 }
	 current = video.currentTime
	console.log("Current location is "+ current);
} 

function mute() { 
  	mute_check = video.muted
  	if (mute_check == true) {// means the video is NOT muted now
  		document.querySelector("#mute").innerHTML = "Muted"
  		video.muted = false;
  		console.log("Unmuted");
  	}
  	else {
  		document.querySelector("#mute").innerHTML = "Unmuted"
  		video.muted = true;
      	console.log("Muted");
  	}
}

function changeVolume() {
	slider = document.getElementById("volumeSlider")
	output = document.getElementById("volume")
	output.innerHTML = slider.value + "%"
	video.volume = (slider.value / 100)
	console.log("Volume is " + slider.value + "%");
}
       

function gray() { 
	// document.getElementById("myVideo").style.filter = "grayscale(100%)"
	document.getElementById("myVideo").classList.add('grayscale')
	console.log("In grayscale");
}

function color() {
	document.getElementById("myVideo").classList.remove('grayscale')
}
