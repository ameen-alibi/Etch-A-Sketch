const gridContainer = document.querySelector('.grid');

function createGrid() {
    let squaresPerSide;

    do {
        squaresPerSide = parseInt(prompt('How many squares per side? (Maximum: 100)'));
    } while (squaresPerSide > 100 || squaresPerSide <= 0);

    gridContainer.innerHTML = ''; // Clear previous grid

    for (let i = 0; i < squaresPerSide ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.flexBasis = `calc(100% / ${squaresPerSide})`;
        cell.style.height = `calc(100% / ${squaresPerSide})`;
        gridContainer.appendChild(cell);
    }

    // Add hover effect with random color and persistent color after mouseup
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            cell.style.backgroundColor = randomColor;
        });
    });
}

const createGridButton = document.getElementById('createGridButton');
createGridButton.addEventListener('click', createGrid);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
