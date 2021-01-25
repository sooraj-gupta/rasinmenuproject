var open = false;
function viewSources()
{
	document.body.classList.toggle("open")
	open = !open;
}
document.getElementById( "sources" ).onclick = function(event)
{
	event.stopPropagation();
}
document.body.onclick = function()
{
	if( open )
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