class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.bg = game.imageByName('background');
        game.registerAction('k', function(){
            var s = Scene.new(game)
            game.replaceScene(s)
        })

        game.registerAction('e', function(){
            var s = SceneEdit.new(game)
            game.replaceScene(s)
        })
    }
    static new(...args) {
        this.i =  new this(...args)
        return this.i
    }
    
    draw() {
        // draw labels

        this.game.context.drawImage(this.bg.image, 0, 0, 800, 600);
        //this.game.context.fillText('按 k 开始游戏', 100, 190)
        //1. 使用`font`设置字体。
       this.game.context.font = "16px serif";
       //2. 使用`fillStyle`设置字体颜色。
       this.game.context.fillStyle = "#ffffff";
       //3. 使用`fillText()`方法显示字体。
        this.game.context.fillText('开始游戏', 100, 290)
        this.game.context.fillText('按 k 开始游戏', 100, 320)
        this.game.context.fillText('按 e 进入编辑模式', 100, 350)
    }
}
