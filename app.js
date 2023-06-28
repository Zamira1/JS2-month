const parentBlock = document.querySelector(".parentBlock")
const child = document.querySelector(".child")


let positionX = 0
let positionY = 0

function recurs () {
    if (positionX < 450) {
        positionX++
        child.style.left = `${positionX}px`
        setTimeout(() => {
            recurs()
        }, 65)
    }
}
recurs()

let num = 0;

    setTimeout(function (){
    setInterval(function (){
        if(num < 30){
            num++
            document.getElementById('num').innerText = num
        }else{
            document.getElementById('num').innerText = `Вы дошли до ${num}`
            clearInterval()
        }
    }, 1000)
}, 1000)
