const steps = [...document.getElementsByClassName('step')];
const stepper = [...document.getElementsByClassName('navs')];
// console.log(stepper[1].classList.add('active'));
// const answers = document.querySelectorAll('.answer');
// answers.forEach(element => {
//     element.addEventListener('click',(e) =>{
//         element.classList.toggle('selected');
//         const check = element.querySelector('input');
//         check.checked = check.checked ^ true;
//     })
// });
// console.log(stepper[0].innerHTML);
function navigation(currentPageIndex){
    steps[currentPageIndex].classList.add('hidden');
    steps[currentPageIndex+1].classList.remove('hidden');

    stepper[currentPageIndex].classList.remove('active');
    stepper[currentPageIndex+1].classList.add('active');
}
function startQuiz(){
    navigation(0)
}
var count = 1;
function nexQ(){
    if(count == 3){
        navigation(1)
    }else{
        count++
    }
}

