export class CreateSprite
{
	constructor(className, width, height, bg, sercle, pushTo){
		this.className = className;
		this.width = width;
		this.height = height;
		this.bg = bg;
		this.sercle = sercle;
		this.pushTo = pushTo;
	}
	createColorBlock() {
		var _block = document.createElement('div');
		_block.classList.add(this.className);
		_block.style.width = this.width + 'px';
		_block.style.height = this.height + 'px';
		_block.style.background = this.bg;
		if (this.sercle == true){
			_block.style.borderRadius = 100 + '%';
		}
		this.pushTo.append(_block);
	}
}

