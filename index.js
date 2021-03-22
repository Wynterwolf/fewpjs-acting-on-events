// Your code here
// grab elementby ID
let dodger = document.getElementById("dodger")

function moveDodgerLeft(){
    //for left style element
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    //stop from straying offscreen
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
    moveDodgerLeft()
    }
  })


function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px", "")
    let left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
    moveDodgerRight()
    }
  })