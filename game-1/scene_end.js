var SceneEnd = function(game) {
    var s = {
        game: game,
    }
    // 初始化
    var background = game.imageByName('background');

    s.draw = function() {
        // draw background
        game.context.drawImage(background.image, 0, 0, 800, 600);
        //1. 使用`font`设置字体。
       game.context.font = "16px serif";
       //2. 使用`fillStyle`设置字体颜色。
       game.context.fillStyle = "#ffffff";
       //3. 使用`fillText()`方法显示字体。
        game.context.fillText('游戏结束', 100, 290)
        game.context.fillText('按 r 重新开始游戏', 100, 320)
    }
    s.update = function() {

    }

    // 重新启动游戏
    game.registerAction('r', function(){
        game.restart()
    })

    return s
}
