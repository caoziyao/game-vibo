class NetSprite {
    constructor(game) {
        this.game = game
        this.setup()

        this.bytes = this.nesBytes()
        // this.addElement()
    }

    setup() {
        this.titleOffset = 32784
        this.elements = []
        this.onload = false
        this.frameSpace = 10
        this.step = 0
        this.x = 0
        this.y = 440
        this.speed = 2
        this.flipX = 0

        // 摩擦力
        this.mx = 0
        this.vx = 0.02
        /*
            8 * 8 像素每个
            2bits 每个像素
            16 bytes 一个图块
            每页 80*80 个图块，就是高宽各 64 像素
        */
        this.bytesPerPixel = 2  // 2bits 每个像素
        this.pixelWidth = 3  // 放大多少倍
        this.blockSzie = 8      // 8 * 8个像素--每图块
        this.bytesPerBlock = this.blockSzie * this.bytesPerPixel // 16 bytes 一个图块
        this.titlesPerSprite = 8
        this.pixelsPerBlock = 8   // 8 * 8个像素--每图块

        this.w = this.blockSzie * 2 * this.pixelWidth
        this.h = this.blockSzie * 4 * this.pixelWidth


        this.colors = [
            'white',
            '#FE1000',
            '#FFB010',
            '#AA3030',
        ]

    }


    static new(...args) {
        return new this(...args)
    }


    nesBytes() {
        // let titleOffset = 32784
        let self = this
        let g = this.game
        let request = {
            url: 'nes/mario.nes',
            callback(r) {
                // window.bytes = new Uint8Array(r)
                self.bytes = new Uint8Array(r)
                // let bytes = window.bytes
                self.onload = true
                log('bytes',self.bytes)

            },
        }
        ajax(request)
    }

    addElement(element) {
        this.elements.push(element)
    }

    drawSprite(data) {
        // let canvas = e('#id-canvas-sprite')
        // let context = canvas.getContext('2d')
        let context = this.game.context
        let pixelsPerBlock = this.pixelsPerBlock
        let pixelWidth = this.pixelWidth
        let offset = 0
        let blockSize = pixelsPerBlock * pixelWidth
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 2; j++) {
                let x = j * blockSize + this.x
                let y = i * blockSize + this.y
                let pixels = data.slice(offset)
                this.drawBlock(context, pixels, x, y, pixelWidth)
                offset += 16
            }
        }
    }

    drawBlock(context, data, x, y, pixelWidth) {
        let colors = this.colors

        let w = pixelWidth
        let h = pixelWidth
        let blockSzie = this.blockSzie   // 一个图块代表 8 各像素
        let pixelSize = 8   // 一个像素 8 bits

        for (let i = 0; i < blockSzie; i++) {
            let p1 = data[i]
            let p2 = data[i + 8]
            for (let j = 0; j < blockSzie; j++) {
                // 8 byte
                // 78 -> 1001110, 69 -> 1000101
                let c1 = (p1 >> (7 - j)) & 0b00000001
                let c2 = (p2 >> (7 - j)) & 0b00000001
                let pixel = (c2 << 1) + c1
                if (pixel != 0 ) {
                    let color = colors[pixel]
                    context.fillStyle = color
                    let px = x + j * w
                    let py = y + i * h

                    context.fillRect(px, py, w, h)
                } else {

                }


            }
        }
    }

    moveRight() {
        let s = this.speed
        this.flipX = 0
        this.x += s
        if (this.x > 586 ) {
            this.x = 586
        }

        if (this.vx != 0) {
            this.speed += this.vx
        } else {
            // this.speed
        }
    }

    moveLeft() {
        this.flipX = 1

        this.x -= this.speed
        if (this.x < 0 ) {
            this.x = 0
        }
    }

    moveUp() {
        this.y -= this.speed
        if (this.y <= 0) {
            this.y = 0
        }
    }

    moveDown() {
        this.y += this.speed
        if (this.y >= 440) {
            this.y = 440
        }
    }


    drawImage() {
        let g = this.game
        let titleOffset = this.titleOffset

        // drawNes(bytes)
        let step = this.step
        let bytesPerBlock = this.bytesPerBlock
        let titlesPerSprite = this.titlesPerSprite
        let bytesPerSprite = bytesPerBlock * titlesPerSprite
        let offset = titleOffset + bytesPerSprite * step

        if (this.onload) {
            // log('draw', step)
            let bytes = this.bytes
            this.drawSprite(bytes.slice(offset))

            if (this.frameSpace == 0) {
                this.step++
                this.step %= 4
            }
        }
    }

    // 反向画图
    reverDraw() {
        let context = this.game.context
        let x = this.x + this.w / 2

        context.save()
        context.translate(x, 0)
        context.scale(-1, 1)
        context.translate(-x, 0)
        this.drawImage()
        context.restore()
    }

    draw() {

        if (this.flipX) {
            this.reverDraw()
        } else {
            this.drawImage()
        }

    }

    update() {
        this.frameSpace--
        if (this.frameSpace < 0) {
            this.frameSpace = 25
        }

    }
}
