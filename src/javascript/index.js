
const text = ["A better life for the people", "True Joy is in the happiness of others", "A good life is a reward on it's own "]
const images = ['image0.jpg','image1.jpg','image2.jpg']
let ind = 1;

function dropSolutions(){
    document.getElementById('solutions_dropdown').classList.toggle('hidden')
}
function displayMobileMenu() {
    document.getElementsByClassName('mobile_menu')[0].classList.toggle('hidden') 
}

document.querySelectorAll('.circular_button').forEach((button, index) => {
    ind = index
    button.addEventListener('click', (event)=>{
        document.querySelectorAll('.circular_button').forEach( butt => {
            butt.classList.remove('active')
        })
        event.target.classList.toggle('active')
        document.getElementById('barner-text').innerText = text[index]
        var img = document.getElementById('hero-image')
        img.src = "./images/image" + index%3 + ".jpg"
    })
});


var buttons = document.querySelectorAll('.circular_button')
setInterval(function changeImage(){
    buttons.forEach(button =>{
        button.classList.remove('active')
    })
    var img = document.getElementById('hero-image')
    img.src = "./src/images/image" + ind%3 + ".jpg"
    document.getElementById('barner-text').innerText = text[ind%3]
    buttons[ind%3].classList.add('active')
    ind += 1
},5000)

function changePic(pic_name){
    console.log(this)
    console.log("hello")
}
