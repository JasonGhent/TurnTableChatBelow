// TurnTableChatBelow
// 2012 Jason Ghent
// UserScript coming..

// TamperMonkey lines
// @name TurnTableChatBelow
// @match http://turntable.fm

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
script.addEventListener('load', function(){ 
    $ = unsafeWindow['jQuery'];
    $.noConflict();
       function bottomChat(){
         $('#right-panel').after('<div id="bottom-panel"></div>');
         $('.chat-container').appendTo('#bottom-panel');
         //$('.guest-list-container').appendTo('#bottom-panel');
         $('.chat-container').css("top","702px");
         $('#right-panel').after('<style type"text/css">.bottom-panel{position:absolute;top:702px !important;display:block;width:760px;} .chat-container{top: 702px !important;} .chat-container{width:100% !important;} .messages{width:100% !important;} .message{width:100% !important;} div.chatBar{width:100% !important;} .playlist-container{height:100% !important;} .songlist{height:510px !important;}</style>');
         }
    
         window.setTimeout(bottomChat, 2500);   // wait 2.5 seconds and apply changes.
    }, false);
