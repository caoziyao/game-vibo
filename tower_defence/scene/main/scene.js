class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()


        this.bg = GuaImage.new(game, 'bg')
        this.gun = Gun.new(game)

        this.addElement(this.bg)
        this.addElement(this.gun)
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }



    setup() {
        this.elements = []

        this.setupInput()

    }


    setupInput() {
        var game = this.game
        var self = this
        // mouser inputs
        let startDrag = false
        this.game.registerMouse(function (event, status) {
            let x = event.offsetX
            let y = event.offsetY
            let clicked = self.gun.poinInFrame({x, y})
            if (status === 'down') {

                if (clicked) {
                    startDrag = true
                    self.tower = self.gun.clone()
                    self.addElement(self.tower)
                }

            } else if (status === 'move') {
                self.tower.x = x
                self.tower.y = y

            } else {
                startDrag = false
                log('删除tower')
                self.removeElement(self.tower)
            }

        })

    }


    draw() {
        super.draw()
        // this.game.context.drawImage(this.background, 0, 0, 400, 600)
        // this.game.context.fillText('按 k 开始游戏', 100, 190)
    }


    update() {
        super.update()

    }


}
