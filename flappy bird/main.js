


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
        background: 'img/bg_day.png',
        bird0: 'img/bird0_0.png',
        bird1: 'img/bird0_1.png',
        bird2: 'img/bird0_2.png',
        land: 'img/land.png',
        pipe_down: 'img/pipe_down.png',
        pipe_up: 'img/pipe_up.png',
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
