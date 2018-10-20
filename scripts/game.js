window.addEventListener("load", function () {
    // Initialize Quintus
    const Q = window.Q = Quintus({development: true})
        .include("Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio")
        .setup({
            width: 608, // Fit to using 1280 x 720
            height: 464,
            scaleToFit: true
        }).controls().touch();

    Q.setImageSmoothing(false);

    // Define scene
    Q.scene("level", function (stage) {
        Q.stageTMX("map.tmx", stage);
    });

    // Loading assets
    Q.loadTMX("map.tmx", function () {
        Q.stageScene("level")
    });
});