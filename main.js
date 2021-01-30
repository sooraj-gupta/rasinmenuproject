var menuItems = document.querySelectorAll("#menu a");
menuItems.forEach(
		function( currentValue, currentIndex ){
				currentValue.style.animationDelay = (currentIndex*0.04) + 0.02 + "s";
		},
);


function wrapWords(str, tmpl) {
	var s = `<span class = 'hover' onclick = 'go(this)'>$&</span>`
  	return str.replace(/\S+/g, tmpl || s );
}

var go = ( str ) =>
{
	var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
	var URL = "https://dictionary.com/browse/"+str.innerHTML;
	if( window.innerWidth > 800 )
	window.open(URL, "_blank", strWindowFeatures);
}

document.querySelectorAll(".text p, .halfsplit + p").forEach(
	function( currentValue ){
		currentValue.innerHTML = wrapWords( currentValue.innerHTML );
	}
);''


var opened = false;
function viewSources()
{
	document.body.classList.toggle("open")
	opened = !opened;
}
document.getElementById( "sources" ).onclick = function(event)
{
	event.stopPropagation();
}
document.body.onclick = function()
{
	if( opened )
	{
		viewSources();
	}
	if( document.getElementById("toggler").className.includes("toggled") )
	{
		document.getElementById( "toggler" ).classList.remove("toggled");	
	}
}
document.getElementById("sourcesmenu").onclick = function( event )
{
	event.stopPropagation();
}


let title =  "The Title";
		let options = {
			body:  "hello"
		}

var load = () =>
{
	let tars = document.querySelectorAll("[tar]");
	for( var i = 0; i < tars.length;i++)
	{
		tars[i].style.backgroundImage = `url( "${tars[i].getAttribute( "tar" )}")`;
	}
}

document.getElementsByClassName("infocontainer")[0].onscroll = () =>
{
	 if( document.getElementById("info1").getBoundingClientRect().left < -30 )
	{
		document.getElementById("swipe").style.opacity = 0;
	}
}

document.getElementById( "toggler" ).onclick = function( e )
{
	this.classList.toggle("toggled");
	e.stopPropagation();
}

document.getElementById("menu").onclick = (e) =>
{
	e.stopPropagation();
	document.getElementById( "toggler" ).classList.remove("toggled");	
}

//var frameNumber = 0;
//var playbackConst = 1000;
//var setHeight = document.getElementById("set-height");
//var yoff =  document.getElementById("set-height").getBoundingClientRect().top + window.scrollY;;
//var vid = document.getElementById( "v" );
//vid.addEventListener("loadedmetadata", function () {
//  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//});
//
//function scrollPlay() {
//  frameNumber = (window.pageYOffset) / playbackConst;
//  vid.currentTime = frameNumber;
//  window.requestAnimationFrame(scrollPlay);
//}
//window.requestAnimationFrame(scrollPlay);
//		
//if( 'Notification' in window )
//{
//	console.log( Notification.permission );
//	if( Notification.permission !== 'denied' && Notification.permission !== 'default' )
//	{
//		let n = new Notification( title, options );
//		console.log ( 'hello' );
//	}
//	else
//	{
//		Notification.requestPermission().then( (result) => {
//			console.log( result );
//			let n = new Notification( title, options );
//		}).catch( (err ) =>  {
//			console.log( err );
//		})
//	}
//}