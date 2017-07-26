class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        // 重新启动游戏
        game.registerAction('k', function(){
            game.restart()
        })

         this.background = game.imageByName('background');
    }

    draw() {
        // draw background
        this.game.context.drawImage(this.background.image, 0, 0, 800, 600);
        //1. 使用`font`设置字体。
       this.game.context.font = "16px serif";
       //2. 使用`fillStyle`设置字体颜色。
       this.game.context.fillStyle = "#ffffff";
       //3. 使用`fillText()`方法显示字体。
        this.game.context.fillText('开始游戏', 100, 290)
        this.game.context.fillText('按 k 开始游戏', 100, 320)
    }

}
