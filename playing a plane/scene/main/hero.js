class SceneHero {
    constructor(game) {
        this.game = game

        this.image = GuaImage.new(game, 'hero')
        this.w = this.image.w / 2
        this.h = this.image.h / 2
        this.bullets = []
        // 图片坐标
        this.x = 150
        this.y = 450
        this.speed = 10
        
        this.setupInputs()
    }

    static new(...args) {
        this.i = new this(...args)
        return this.i
    }

    setupInputs() {
        var game = this.game
        // 飞机运动
        game.registerAction('a', () => {
            this.moveLeft()
        })
        game.registerAction('d',  () =>{
            this.moveRight()
        })
        game.registerAction('w',  () =>{
            this.moveUp()
        })
        game.registerAction('s',  () =>{
            this.moveDown()
        })
    }

    moveLeft() {
        this.x <= 0 ? this.x = 0 : this.x -= this.speed
    }

    moveRight() {
        var w = this.image.w
        this.x >= 400 - w / 2 ? this.x = 400 - w / 2 : this.x += this.speed
    }

    moveUp() {
        var h = this.image.h
        this.y <= 0 / 2 ? this.y = 0 : this.y -= this.speed
    }

    moveDown() {
        var h = this.image.h
        this.y >= 600 - h / 2 ? this.y = 600 - h / 2 : this.y += this.speed

    }

    update() {

    }

    // 发射子弹
    fire() {
        var game = this.game
        var bullet = SceneBullet.new(game)
        bullet.x = this.x + 24
        bullet.y = this.y
        this.bullets.push(bullet)
        this.scene.addElement(bullet)
        // bullet.fire()
    }
}
