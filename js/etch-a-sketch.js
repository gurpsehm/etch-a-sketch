const gridContainer = document.querySelector('#gridContainer');

function createGrid(size) {
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

		// Button changes clicked grid element color changed to black
		blackBtn.addEventListener('click', () => {		
			['mousedown', 'dragover'].forEach ( evt =>
				gridElement.addEventListener(evt, () => {
					gridElement.style.backgroundColor = 'black';
				})
			);
		});

		// Button changes clicked grid element color changes to a random color
		rainbowBtn.addEventListener('click', () => {
			['mousedown', 'dragover'].forEach ( evt =>
				gridElement.addEventListener(evt, () => {
					const randomColor = Math.floor(Math.random()*16777215).toString(16);
					gridElement.style.backgroundColor = '#' + randomColor;
				})
			);
		});

		// Button changes clicked grid element color changed to white
		eraserBtn.addEventListener('click', () => {		
			['mousedown', 'dragover'].forEach ( evt =>
				gridElement.addEventListener(evt, () => {
					gridElement.style.backgroundColor = '';
				})
			);
		});

		// Removes grid background color
		clearBtn.addEventListener('click', () => {
			gridElement.style.backgroundColor = '';
		});
	}
}

// Slider changes and displays grid size amount
gridSize.addEventListener('input', () => {
	const gridSizeValue = gridSize.value;

	rangeValue.textContent = gridSizeValue + ' * ' + gridSizeValue;
	gridContainer.textContent = '';
	gridContainer.style.gridTemplateColumns = 'repeat(' + gridSizeValue + ', auto [col-start])';
	
	createGrid(gridSizeValue);
});

// Creates initial grid
createGrid(gridSize.defaultValue);