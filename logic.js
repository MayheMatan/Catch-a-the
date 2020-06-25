const Froger = () => {
    const _frogs = [];
    let _currentLevel = '-';
    let _timer = '-';
    let _timerId = null;
    let _frogsLeft = '-';
    let _isGameOver = false;

    const getFrogs = () => _frogs;
    const getLevel = () => _currentLevel;
    const getTime = () => _timer;
    const getFrogsLeft = () => _frogsLeft;

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const addLevel = () => {
        _currentLevel++;
    }

    const startGame = () => {
        _isGameOver = false;
        _currentLevel = 1;
        _timer = 3;
        addFrog();
        let _timerId = setInterval(() => {
            _timer--;
            if (!_timer) {
                stopGame();
                clearInterval(_timerId);
            }
        }, 1000);
        _frogsLeft = _frogs.length;
    }

    const stopGame = () => {
        while (_frogs.length) {
            _frogs.pop();
        }

        _currentLevel = '-';
        _timer = '-';
        _timerId = null;
        _frogsLeft = '-';
        _isGameOver = false;
    }

    const addFrog = () => {
        const randomColor = getRandomColor();
        const frogSize = `${randomYPosition / 3}px`;
        const randomXPosition = Math.floor(Math.random() * 1000);
        const randomYPosition = Math.floor(Math.random() * 300);
        const randomPosition = `top: ${randomXPosition}px; left: ${randomYPosition}`;

        const frog = {
            id: _frogs.length,
            color: randomColor,
            size: frogSize,
            position: randomPosition,
        }

        _frogs.push(frog);
    }

    const removeFrog = frogId => {
        for (let frog in _frogs) {
            if (_frogs[frog].id === frogId) {
                _frogs.splice(frog, 1);
            }
        }
    }
    return { addFrog, removeFrog, getFrogs, getFrogsLeft, getLevel, getTime, startGame, stopGame, addLevel }
}