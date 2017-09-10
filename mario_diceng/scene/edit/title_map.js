class TitleMap {
    constructor(game) {
        this.game = game
        this.titles = [
            2, 1, 0, 1,
            1, 0, 1, 1,
            1, 1, 1, 2,
            1, 1, 1, 2,
            1, 1, 1, 2,
        ]
        this.th = 4     // 列数
        this.tw = this.titles.length / this.th // 行数
        this.titleSize = 32
        this.titleImages = [
            GuaImage.new(game, 't1'),
            GuaImage.new(game, 't2'),
            GuaImage.new(game, 't3'),
        ]
    }

    static new(...args) {
        return new this(...args)
    }

    draw() {
        let h = this.th
        for (let i = 0; i < this.titles.length; i++) {
            let index = this.titles[i]
            if (index != 0) {
                let y = Math.floor( i / h) * this.titleSize
                let x = Math.floor(i % h) * this.titleSize
                let img = this.titleImages[index]
                // log('img', img)
                this.game.context.drawImage(img.img.texture, x, y)
            } else {

            }
        }
    }

    update() {

    }
}
