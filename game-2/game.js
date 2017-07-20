var Game = function (fps, images, runCallback) {
    // images 是一个对象, 里面是图片的引用名字和图片路径
    // 程序会在所有图片载入成功后才运行

    var canvas = document.querySelector('#id-canvas');
    var context = canvas.getContext('2d');

    var g = {
        canvas: canvas,
        context: context,
        actions: {},
        keydowns: {},
        images: {},
    }

    g.drawImage = function (gwImage) {
        g.context.drawImage(gwImage.image, gwImage.x, gwImage.y);
    }

    // events
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true;
    })

    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false;
    })

    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    // timer
    window.fps = 30
    var runloop = function() {
        // events
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if(g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        context.clearRect(0, 0, canvas.width, canvas.height)
        // draw
        g.draw()
        // next run loop
        setTimeout(function(){
            runloop()
        }, 1000/window.fps)
    }

    //
    var loads = []
    var names = Object.keys(images)
    for (var i = 0; i < names.length; i++) {
        let name = names[i]
        var path = images[name]
        let img = new Image()
        img.src = path
        img.onload = function () {
            g.images[name] = img
            loads.push(1)
            if (loads.length == names.length) {
                log('load images', g.images)
                g.run()
            }
        }
    }

    g.imageByName = function(name) {
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }

    g.run = function() {
        runCallback(g)
        setTimeout(function(){
            runloop()
        }, 1000/fps)
    }
    return g
}
