const Renderer = () => {
    const renderFrogs = frogs => {
        $(".game").empty();
        for (let frog of frogs) {
            $(".game").append(`<i class="fas fa-frog frog" 
                                  data-id="${frog.id}"
                                  style="color: ${frog.color};
                                         font-size: ${frog.size};
                                         ${frog.position}">
                               </i>`);
        }
    };

    const renderInit = (timer, level, frogsLeft, timerColor) => {
        $(".header").empty();
        $(".header").append(`<h3 id="timer" style="color: ${timerColor};">You have ${timer} seconds left`);
        $("#frogs-left").empty();
        $("#frogs-left").append(`<h3 id="frogs-count">${frogsLeft} Frogs left</h3>`);
        $("#level").empty();
        $("#level").append(`<h3 id='level-now'>Level ${level}</h3>`)
    };


    const renderGameOver = (timer, level, frogsLeft, timerColor) => {
        $("#start-btn").text('Start');
        $(".game").empty();
        $(".game").append("<div id='game-over'>Game Over!</div>");
        renderInit(timer, level, frogsLeft, timerColor);
    };

    return { renderInit, renderGameOver, renderFrogs };
};