const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
	const gridElement = document.createElement('grid');
	gridContainer.appendChild(gridElement);
}