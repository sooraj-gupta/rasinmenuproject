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
}
document.getElementById("sourcesmenu").onclick = function( event )
{
	event.stopPropagation();
}