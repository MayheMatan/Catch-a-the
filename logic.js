const Froger = () => {
    const _frogs = [];
    let _currentLevel = '-';
    let _timer = '-'

    const getFrogs = () => _frogs;
    const getLevel = () => _currentLevel;
    const getTime = () => _timer;

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const addFrog = position => {
        const randomColor = getRandomColor();
        const randomXPosition = Math.floor(Math.random() * 1000);
        const randomYPosition = Math.floor(Math.random() * 300);
        const position = `top: ${randomXPosition}px; left: ${randomYPosition}`;

        const frog = {
            id: _frogs.length,
            position: position,
            color: randomColor,
        }

        _frogs.push(frog);
    }
}