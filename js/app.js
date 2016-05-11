var chat=document.getElementById("chatwindow");
var msg=document.getElementById("messagebox");

var socket = new WebSocket("ws://127.0.0.1:2000");

function addMessage(msg){
	chat.InnerHTML += "<p>" + msg + "</p>";
}

msg.addEventListener('keypress' , function(evt) {
	if (evt.charCode != 13 || msg.value == "") 			//charcode 13=enter key
		return;

	evt.preventDefault();

	socket.send(JSON.stringify({ 				//JSON.stringify() method converts a JavaScript value to a JSON string.
		msg: msg.value
	}));

	addMessage(msg.value);

	msg.value = "";
});