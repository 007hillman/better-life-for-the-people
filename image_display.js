//determining the number of circles to be created based on the 
//number of divs found in the display-zone
var number_of_circles
var current_index = 2
number_of_circles = document.getElementById('display-zone').children.length
var subjects = []
//creating an array of circles and adding to the circle zone
let circles = []
chooseWhoToDisplay()

 drawCircles()

//setting a time interval to change everything in the display zone
setInterval(function changePictures() {
    drawCircles()
    chooseWhoToDisplay()
}, 5000)

function drawCircles(){
    var circle_zone = document.getElementById('circle-zone')
    circle_zone.innerHTML = ""
    for (let index = 0; index < number_of_circles; index++) {
        var circle = document.createElement('span')
        circle.classList.add('circle')
        if (index === current_index%number_of_circles) {
            circle.classList.add('coloured')
        }
        circles.push(circle)
        circle_zone.appendChild(circle)
    } 
}
function chooseWhoToDisplay(){
//grabbing and emptying the slide show
    var slide_show = document.getElementById('slide-show')
    slide_show.classList.toggle('hide')
    slide_show.innerHTML = ""
    var subjects = document.querySelector('#display-zone').children
//adding slides to slide show
    subjects = document.getElementById('display-zone').children
    var ind = current_index
    var text = ""
    for (let index = current_index; index < ind+3; index++) {
        var new_div = document.createElement('div')
        new_div.innerHTML = subjects[(index-1)%number_of_circles].innerHTML
        new_div.classList.toggle('slide')
        new_div.classList.toggle('border')
        new_div.classList.toggle('border-2')
        new_div.classList.toggle('border-blue-100')
        new_div.classList.toggle('h-full')

        slide_show.appendChild(new_div)
    }
//Displaying the slide show after all those changes
slide_show.classList.toggle('hide')
current_index += 1

}
    
