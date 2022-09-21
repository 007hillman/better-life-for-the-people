//determining the number of circles to be created based on the 
//number of divs found in the display-zone
var number_of_circles
var current_index = 0
number_of_circles = document.getElementById('display-zone').children.length
var subjects = []
//creating an array of circles and adding to the circle zone
let circles = []
 drawCircles()

//setting a time interval to change everything in the display zone
setInterval(function changePictures() {
    current_index += 1
    drawCircles()
}, 3000)

function drawCircles(){
    var circle_zone = document.getElementById('circle-zone')
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
// function chooseWhoToDisplay(){
//     var subjects = document.querySelector('#display-zone').children
// //hiding all the subjects
//     for (let index = 0; index < subjects.length; index++) {
//         subjects[index].classList.add('hidden')  
//     }
//     for (let i = 0; i < 3; i++) {
//         if (i===0) {
//             subjects[current_index%number_of_circles].classList.toggle('coloured')
//         }
//         subjects[(current_index%number_of_circles) +(i%number_of_circles)].classList.toggle('hidden')
//     }
// }
    
