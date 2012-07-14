// TurnTableChatBelow
// 2012 Jason Ghent
// UserScript coming..

$('#right-panel').after('<div id="bottom-panel"></div>');
$('.chat-container').appendTo('#bottom-panel');
//$('.guest-list-container').appendTo('#bottom-panel');
$('.chat-container').css("top","702px");
$('#right-panel').after('<style type"text/css">.bottom-panel{position:absolute;top:702px !important;display:block;width:760px;} .chat-container{top: 702px !important;} .chat-container{width:100% !important;} .messages{width:100% !important;} .message{width:100% !important;} div.chatBar{width:100% !important;} .playlist-container{height:100% !important;} .songlist{height:510px !important;}</style>');
