function scrollProducts(elementContainer, direction) {
	const container = document.getElementById(elementContainer);

	if (direction == 'right') container.scrollLeft += 400;
	if (direction == 'left') container.scrollLeft -= 400;
}


