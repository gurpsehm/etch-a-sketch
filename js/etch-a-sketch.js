const gridContainer = document.querySelector('#gridContainer');

function createGrid(size){
	for (let i = 0; i < (size * size); i++) {
		// Creates and displays a user selected grid
		const gridElement = document.createElement('grid');
		gridContainer.appendChild(gridElement);
		gridElement.setAttribute('draggable', true);

		// Clicked grid element color changed to black
		['mousedown', 'dragover'].forEach ( evt =>
			gridElement.addEventListener(evt, () => {
				gridElement.style.backgroundColor = 'black';
			})
		);

		// Removes grid background color
		clearBtn.addEventListener('click', () => {
			gridElement.style.backgroundColor = '';
		});
	}
}

// Slider changes and displays grid size amount
gridSize.addEventListener('input', () => {
	rangeValue.textContent = gridSize.value + " * " + gridSize.value;
	gridContainer.textContent = "";
	createGrid(gridSize.value);
});

// Creates initial grid
createGrid(gridSize.defaultValue);