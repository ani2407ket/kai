function handleControls(e){
	switch(e.key){
    case 'ArrowRight':
	case 39:
      player.x+=3;
      break;
    case 'ArrowLeft':
	case 37:
      player.x-=3;
      break;
  }
}
document.addEventListener('keydown',handleControls);