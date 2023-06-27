const btnCheck = document.querySelector("#check")

function validate () {
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const password_repeat = document.querySelector("#password_repeat")

    const regExp_email = /^[a-z0-9._%+-]{4,16}@gmail\.com$/i
    const regExp_password = /^[A-Z][a-z0-9]{4,16}\d$/

    if (!regExp_email.test(email.value)) {
        console.log('false')
        return
    }
    else if (!regExp_password.test(password.value)) {
        console.log('false')
        return
    }
    else if (password.value !== password_repeat.value) {
        console.log('false')
        return;
    }

    console.log('true')
}

btnCheck.onclick = () => {
    validate()
}

// homework 2

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
        }, 10)
    }
}
recurs()