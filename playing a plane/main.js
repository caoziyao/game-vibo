


var insertControls = function () {
    var div = e('.gua-control')
    var keys = Object.keys(config)
    log('keys', keys)
    for (var k of keys) {
        var item = config[k]
        var html = templateControl(k, item)
        div.insertAdjacentHTML('beforeend', html)

    }

}

var templateControl = function (key, item) {
    var t = `
        <div class="">
            <label>
                <input class="gua-auto-slider" type="range" name=""
                    value="${item._comment}"
                    data-value="config.${key}"
                    max = "${item.max}"
                    min = "${item.min}"
                    >
                ${item._comment}: <span class="gua-label">${item.value}</span>
            </label>
        </div>
    `
    return t
}

var bindEvents = function () {
    bindAll('.gua-auto-slider', 'input', function (event) {
        var target = event.target
        var bindVal = target.dataset.value
        var v = target.value
        eval(bindVal + '.value = ' + v)

        var label = target.closest('label').querySelector('.gua-label')
        label.innerText = v

    })
}


var __main = function() {
    var images = {
        background: 'img/bg.png',
        bullet: 'img/bullet.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        hero: 'img/hero.png',
        enemy_down: 'img/enemy_down.png',
        ufo1: 'img/ufo1.png',
        ufo2: 'img/ufo2.png',
    }

    // 生成配置 html 控件
    insertControls()
    // 绑定事件
    bindEvents()

    var game = Game.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        // var s = SceneMain.new(g)
        g.runWithScene(s)

    })
}
window.onload = function(){
    __main()
}
