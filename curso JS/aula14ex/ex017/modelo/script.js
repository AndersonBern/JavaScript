function tabuada() {

var n = document.getElementById('num')
var tab = document.getElementById('seltab')



if (n.value.length == 0) {
    alert('Por favor, digite um número!')

}else {
    var num = Number(n.value)
    var c = 0
    tab.innerHTML = ''

    while(c <= 9) {
        var item = document.createElement('option')

        item.text = `${num} x ${c} = ${num * c}`
        tab.appendChild(item)
        c++

    }



}



}