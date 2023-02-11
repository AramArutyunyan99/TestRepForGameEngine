// Create sprite
const CreateSprite = (className, width, height, bg, sercle, pushTo) =>
{
	var _sprite = document.createElement('div');
	_sprite.className.add(className);
	_sprite.style.width = width + 'px';
	_sprite.style.height = height + 'px';
	_sprite.style.background = bg;
	if(sercle == true) _sprite.style.borderRadius = 100 + '%';
	pushTo.append(_sprite);
}

