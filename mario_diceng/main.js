/*
    8 * 8 像素每个
    2bits 每个像素
    16 bytes 一个图块
    每页 80*80 个图块，就是高宽各 64 像素
*/
const drawBlock = (context, data, x, y, pixelWidth) => {

    const colors = [
        'white',
        '#FE1000',
        '#FFB010',
        '#AA3030',
    ]

    let w = pixelWidth
    let h = pixelWidth
    let blockSzie = 8   // 一个图块代表 8 各像素
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
            let color = colors[pixel]
            context.fillStyle = color
            let px = x + j * w
            let py = y + i * h

            context.fillRect(px, py, w, h)
        }
    }
}

const drawNes = bytes => {
    // 78 69 第一个图块
    // 78 -> 1001110, 69 -> 1000101
    let canvas = e('#id-canvas')
    let context = canvas.getContext('2d')

    let blockSzie = 8   // 一个图块代表 8 各像素
    let pixelSize = 8   // 一个像素 8 bits
    let pixelWidth = 10 // 放大 10 倍
    let numberOfBytesPerBlock = 16   // 16 bytes 一个图块


    for (let i = 0; i < blockSzie; i++) {
        for (let j = 0; j < blockSzie; j++) {
            // 算出 bytes
            let x = j * pixelSize * pixelWidth
            let y = i * pixelSize * pixelWidth
            let index = window.offset + (i * 8  + j) * numberOfBytesPerBlock
            drawBlock(context, bytes.slice(index), x, y, pixelWidth)
        }
    }

}

const actions = {
    change_offset(offset) {
        window.offset += offset
        e('h3').innerHTML = window.offset
        drawNes(window.bytes)
    },

    pause() {
        window.paused = !window.paused
    }

}

const binEvents = () => {
    e('.gw-controls').addEventListener('click', event => {
        let action = event.target.dataset.action
        let offset = Number(event.target.dataset.offset)
        actions[action] && actions[action](offset)

    })

    window.addEventListener('keydown', event => {
        if (event.key == 'p') {
            window.paused = !window.paused
        }
    })
}

const drawSprite = data => {
    let canvas = e('#id-canvas-sprite')
    let context = canvas.getContext('2d')
    let pixelsPerBlock = 8
    let pixelWidth = 10
    let offset = 0
    let blockSize = pixelsPerBlock * pixelWidth
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
            let x = j * blockSize
            let y = i * blockSize
            let pixels = data.slice(offset)
            drawBlock(context, pixels, x, y, pixelWidth)
            offset += 16
        }
    }
}

//
const __main = () => {
    // 32784
    window.paused = false
    window.offset = 32784
    let titleOffset = 32784
    let request = {
        url: 'nes/mario.nes',
        callback(r) {
            window.bytes = new Uint8Array(r)
            // log('bytes', bytes)
            let bytes = window.bytes
            drawNes(bytes)
            let step = 0
            let bytesPerBlock = 16
            let titlesPerSprite = 8
            let bytesPerSprite = bytesPerBlock * titlesPerSprite
            setInterval(function() {
                let offset = titleOffset + bytesPerSprite * step
                drawSprite(bytes.slice(offset))
                if (window.paused) {
                    // 暂停
                } else {
                    step++
                    step %= 4
                }

            }, 200)

        },
    }
    ajax(request)
    binEvents()


    let images = {
        bg: 'img/overworld_bg.png',
    }


    let game = Game.instance(30, images, (game) => {
        let s = SceneMain.new(game)

        game.runWithScene(s)
    })
}

__main()
