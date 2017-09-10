class SceneEditText{
    constructor(game) {
        this.game = game
        this.elements = []
        this.setup()

        this.addText('鼠标点击开始编辑', [100, 290])
        this.addText('按 k 开始游戏', [100, 320])
        this.addText('按 q 清除砖块', [100, 350])
    }
    static new(...args) {
        this.i =  new this(...args)
        return this.i
    }

    setup() {
        var game = this.game
        //1. 使用`font`设置字体。
       game.context.font = "16px serif";
       //2. 使用`fillStyle`设置字体颜色。
       game.context.fillStyle = "#ffffff";
    }

    draw() {
        var game = this.game
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            var text = e.text
            var x = e.x
            var y = e.y
            game.context.fillText(text, x, y)
        }
    }

    addText(text, positon) {
        var game = this.game
        var e = {
            text: text,
            x: positon[0],
            y: positon[1],
        }
        this.elements.push(e)
    }

    update() {

    }

}
