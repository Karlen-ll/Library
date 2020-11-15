// Internet Explorer 6+
function addEvent(e, ev, fn) { return e.attachEvent ? e.attachEvent('on'+ ev, fn) : e.addEventListener(ev, fn, !!0); }

// example
addEvent(
    document.getElementById('myElement'), 'click', function () { alert('hi!');}
);

// Progressive JS
// <html class="no-js">
document.documentElement.classList.replace('no-js', 'js');

// Округление
new Intl.NumberFormat('ru-RU').format(Math.round(1234056.789))