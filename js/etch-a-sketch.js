const gridContainer = document.querySelector('#gridContainer');

for (let i = 0; i < 256; i++) {
	// Creates and displays a 16 * 16 grid
	const gridElement = document.createElement('grid');
	gridContainer.appendChild(gridElement);
	gridElement.setAttribute('draggable', true);

	// Clicked grid element color changed to black
	['mousedown', 'dragover'].forEach ( evt =>
		gridElement.addEventListener(evt, () => {
			gridElement.style.backgroundColor = "black";
		})
	);
}

