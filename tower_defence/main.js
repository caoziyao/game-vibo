


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
        bg: 'img/bg.jpg',
        gun: 'img/gun.png',
    }


    var game = Game.instance(30, images, function(g){
        log('game')
        // var s = SceneTitle.new(g)
        var s = SceneMain.new(g)
        g.runWithScene(s)

    })
}
window.onload = function(){
    __main()
}
