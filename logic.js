const Froger = () => {
    const _frogs = [];
    let _currentLevel = '-';
    let _timer = '-';
    let _timerId = null;
    let _frogsLeft = '-';
    let _isGameOver = false;
    let _timerColor = 'black';

    const getFrogs = () => _frogs;
    const getLevel = () => _currentLevel;
    const getTime = () => _timer;
    const getFrogsLeft = () => _frogsLeft;
    const getTimerColor = () => _timerColor;
    const getIsGameOver = () => _isGameOver

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const toggleRed = () => {
        if (_timerColor === "red") {
            _timerColor = "black"
        } else if (_timerColor === "black") {
            _timerColor = "red"
        }
    }

    const addLevel = () => {
        _currentLevel++;
    }

    const levelUp = () => {
        _timerColor = 'yellow';
        _timer++;
        addLevel();
        for (let i = 0; i < _currentLevel; i++) {
            addFrog();
        }
        _frogsLeft = _frogs.length;
        setTimeout(() => {
            _timerColor = 'black';
        }, 500)
    }

    const startGame = () => {
        if (!_frogs.length) {
            _isGameOver = false;
            _currentLevel = 1;
            _timer = 3;
            addFrog();
            _timerId = setInterval(function() {
                _timer--;
                if (!_timer) {
                    stopGame();
                    clearInterval(_timerId);
                }
            }, 1000);
            _frogsLeft = _frogs.length;
        } else return;
    }

    const stopGame = () => {
        while (_frogs.length) {
            _frogs.pop();
        }

        _currentLevel = '-';
        _timer = '-';
        _timerId = null;
        _frogsLeft = '-';
        _isGameOver = true;
    }

    const addFrog = () => {
        const randomColor = getRandomColor();
        const randomXPosition = Math.floor(Math.random() * 1000);
        const randomYPosition = Math.floor(Math.random() * 300);
        const randomPosition = `top: ${randomXPosition}px; left: ${randomYPosition}px`;
        const frogSize = `${(randomYPosition / 3) + 5}px`;
        const frog = {
            id: (_frogs.length),
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
        if (!_frogs.length) {
            levelUp()
            _timer++
        }
    }
    return { addFrog, removeFrog, getFrogs, getFrogsLeft, getLevel, getTime, startGame, stopGame, addLevel, toggleRed, getTimerColor, levelUp, getIsGameOver, toggleRed }
}