class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    setup() {
        this.enemies = []
        this.towers = []
        this.elements = []
        this.setupBG()
        this.setupGameElements()
        this.setupTower()
        this.setupHUD()
        this.setupInput()

    }

    setupTower() {
        let game = this.game
        let t = Tower.new(game)
        this.addElement(t)

        this.towers.push(t)
    }

    setupBG() {
        let game = this.game
        this.bg = GuaImage.new(game, 'bg')
        this.addElement(this.bg)
    }

    setupHUD() {
        let game = this.game
        this.gun = Gun.new(game)
        this.addElement(this.gun)
    }

    setupGameElements() {
        let game = this.game
        let e1 = Enemy.new(game)
        this.addElement(e1)

        let e2 = Enemy.new(game)
        e2.x = -200
        this.addElement(e2)

        this.enemies.push(e1)
        this.enemies.push(e2)
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

    }

    canAttack() {

    }

    update() {
        super.update()

        for (let t of this.towers) {
            if (t.target === null) {
                t.findTarget(this.enemies)
            } else {

            }
        }
    }


}
