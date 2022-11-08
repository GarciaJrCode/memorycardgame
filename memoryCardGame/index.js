let divElement = document.querySelectorAll('.small-container')

let hasClickedCard = false
let lockCard = false
let firstCard, secondCard

function printElement(){
    if (lockCard) return
    if(this===firstCard) return

    this.classList.toggle('flip')

    if(!hasClickedCard){
        //First Click
        hasClickedCard = true
        firstCard = this
        return
    }
        //Second Click
    secondCard = this
    checkPair()
    
}

function checkPair(){
    let matchCard = firstCard.dataset.framework === secondCard.dataset.framework

    matchCard ? removeItem() : stopFlip()
}

function removeItem(){
    firstCard.removeEventListener('click',printElement)
    firstCard.removeEventListener('click',printElement)

    resteGame()
}

function stopFlip(){
    lockCard = true

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resteGame()
    },1500)
}

function resteGame(){
    [hasClickedCard,lockCard] = [false, false]
    [firstCard,secondCard] = [null,null]
}

(function randomElement(){
    divElement.forEach(element => {
        let randNum = Math.floor(Math.random() * 12)
        element.style.order = randNum
    })
})()

divElement.forEach(element => element.addEventListener('click', printElement))