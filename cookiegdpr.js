(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {
	var pluses = /\+/g;
	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}
	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}
	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}
	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}
	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}
	var config = $.cookie = function (key, value, options) {
		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);
			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}
			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '',
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}
		var result = key ? undefined : {};
		var cookies = document.cookie ? document.cookie.split('; ') : [];
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');
			if (key && key === name) {
				result = read(cookie, value);
				break;
			}
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}
		return result;
	};
	config.defaults = {};
	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};
}));
$(".close-cookie-warning").on("click", function() {
  $.cookie('HideCookieMessage', 'true', { expires: 120, path: '/'});
  $('div.cookies').hide();
});
(function ($) {
  if ($.cookie('HideCookieMessage')) { $('.cookies').hide(); } else {
    $('.cookies').show(); }
})(jQuery);

<script src='https://arlina-design.googlecode.com/svn/prism.js' type='text/javascript'/> <
script >
  $( & #39;pre&# 39;).attr( & #39;class&# 39;, & #39;line-numbers&# 39;);
Prism.hooks.add( & quot; after - highlight & quot;, function(e) {
    var t = e.element.parentNode;
    if (!t || !/pre/i.test(t.nodeName) || t.className.indexOf( & quot; line - numbers & quot;) === -1) {
      return
    }
    var n = 1 + e.code.split( & quot;\ n & quot;).length;
    var r;
    lines = new Array(n);
    lines = lines.join( & quot;
      <span/> & quot;);
    r = document.createElement( & quot; span & quot;);
    r.className = & quot;
    line - numbers - rows & quot;;
    r.innerHTML = lines;
    if (t.hasAttribute( & quot; data - start & quot;)) {
      t.style.counterReset = & quot;
      linenumber & quot; + (parseInt(t.getAttribute( & quot; data - start & quot;), 10) - 1)
    }
    e.element.appendChild(r)
  }) <
  /script>

<
script type = 'text/javascript' >
  var pres = document.getElementsByTagName( & quot; pre & quot;);
for (var i = 0; i & lt; pres.length; i++) {
  pres[i].addEventListener( & quot; dblclick & quot;, function() {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
} <
/script>