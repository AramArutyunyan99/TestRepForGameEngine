const pusher = () => {
	this.seyHi('hello');
}

const req = new XMLHttpRequest();
req.addEventListener('load', pusher);
req.open('CORS', './main.js');
req.send();
