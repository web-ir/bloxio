function WHCreateCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}
function WHReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

window.onload = WHCheckCookies;

function WHCheckCookies() {
    if(WHReadCookie('cookies_accepted') != 'T') {
        var message_container = document.createElement('div');
        message_container.id = 'cookies-message-container';
        var html_code = '<div id="cookies-message" style="padding: 10px 0px; font-size: 14px; color: #000000; line-height: 18px; border-bottom: 1px solid rgb(211, 208, 208); text-align: center; position: fixed; top: 0px; background-color: #efefef; width: 100%; z-index: 999;">Ta strona używa ciasteczek (cookies), dzięki którym nasz serwis może działać lepiej. <a href="http:/www.dnastudio.pl/cookie.pdf" target="_blank" style="color:#333;">Więcej informacji o cookies kliknij tu>>></a><a href="javascript:WHCloseCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #979797; padding: 5px 10px; color: #FFF; border-radius: 0px; -moz-border-radius: 0px; -webkit-border-radius: 0px; display: inline-block; margin-left: 10px; text-decoration: none; cursor: pointer;">Rozumiem</a></div>';
        message_container.innerHTML = html_code;
        document.body.appendChild(message_container);
    }
}

function WHCloseCookiesWindow() {
    WHCreateCookie('cookies_accepted', 'T', 365);
    document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
}
