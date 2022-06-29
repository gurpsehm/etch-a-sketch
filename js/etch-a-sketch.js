const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
	// Creates and displays a 16 * 16 grid
	const gridElement = document.createElement('grid');
	gridContainer.appendChild(gridElement);

	// Clicked grid element color changed to black
	gridElement.addEventListener('click', () => {
		gridElement.style.backgroundColor = "black";
	});
}

