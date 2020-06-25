const froger = Froger();
const renderer = Renderer();
let toggleTimer = null;

renderer.renderInit(froger.getTime(), froger.getLevel(), froger.getFrogsLeft(), froger.getTimerColor());
renderer.renderFrogs(froger.getFrogs());

$(".game").on("click", ".frog", function() {
    console.log($(this).data().id)
    froger.removeFrog($(this).data().id);
    renderer.renderFrogs(froger.getFrogs());
});

const startRender = () => {
    let renderTimerListener = setInterval(function() {
        if (froger.getIsGameOver()) {
            renderer.renderGameOver(froger.getTime(), froger.getLevel(), froger.getFrogsLeft(), froger.getTimerColor());
            clearInterval(renderTimerListener);
        } else {
            if (froger.getTime() < 2 && froger.getTime() > 0) {
                toggleTimer = setInterval(froger.toggleRed, 1000);
            } else {
                clearInterval(toggleTimer);
            }
            renderer.renderInit(froger.getTime(), froger.getLevel(), froger.getFrogsLeft(), froger.getTimerColor());
        }
    }, 1);
}

$("#start-btn").on("click", function() {
    froger.startGame();
    $(this).text("Catch The Frogs!");
    startRender();
    renderer.renderFrogs(froger.getFrogs());
});