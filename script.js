// JavaScript Document

document.addEventListener("DOMContentLoaded" , function()
{
	
	//well call our initializing funtion here once we write it
	startVideoPlayer();
	
}, false);

var videoPlayer;

function startVideoPlayer()
{
	videoPlayer = document.getElementById("video");
	
	/*sends the specified video to the video object when the page is first loaded. */
	
	loadVideo("Meg.wmv");
	
/*turn off browser based video element controls which are available by default */

videoPlayer.controls = false;

console.log("video controls are disabled");

	videoPlayer.addEventListener("startProgressBar", updateProgressBar, false);
}

function togglePlayPause()
{
	var button = document.getElementById("play-pause-btn");
	
	if (videoPlayer.paused || videoPlayer.ended){
		 button.innerHTML = "pause";
	 	 videoPlayer.play();	
	} else {
		button.innerHTML = "play";
		videoPlayer.pause();
	}
}

function stopVideo() {
	
	videoPlayer.pause();
	videoPlayer.currentTime = 0;
	
	var button = document.getElementById("play-pause-btn");
	button.innerHTML = "Play";
}
function changeVolume() {
	volume.volume=document.getElementById("changeVolume").value;
}


function updateProgressBar() {
	var bar = document.getElementById('progressBar');
	var percent =  Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);
	bar.value = percent;
	bar.innerHTML = percent;

}


function fullScreen() {
	if (videoPlayer.requestFullScreen) {
		videoPlayer.requestFullScreen();
	} else if (videoPlayer.mozRequestFullScreen) {
		videoPlayer.mozRequestFullScreen();
	} else if (videoPlayer.webkitRequestFullScreen) {
		videoPlayer.webkitRequestFullScreen();
	}
	
	videoPlayer.webkitRequestFullScreen();
	console.log("Trying to go full screen. ");
	
}

function loadVideo(video)
	{
		var vPath = 'video/' + video;
		
		videoPlayer.src = vPath;
		videoPlayer.load();
		
	}

