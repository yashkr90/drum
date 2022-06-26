
// document.addEventListener('keydown',myFunc);

// function myFunc(eve){
//         console.log(eve);
// }
document.addEventListener('keydown',function(eve){
        makeSound(eve.key);
        playaniamtion(eve.key);
});


let buttons=document.querySelectorAll("button.drum");

for (const i in buttons) {
    buttons[i].addEventListener("click", function(){

        let buttonInnerHtml=this.innerHTML;

        makeSound(buttonInnerHtml);
        playaniamtion(buttonInnerHtml);
        //calling function inside anonymous func

    });
      //added event listener to all html buttons  
    
}





function makeSound(key){

    //   var audio= new Audio('sounds/tom-1.mp3');
    // audio.play();

    // console.log(this.innerHTML);
    // this.style.color="white";

    // var buttonPressed= this.innerHTML;

    switch (key) {
        case "w":
                var tom1= new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

        case "a":
                var tom2= new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

        case "s":
                var tom3= new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

        case "d":
                var tom4= new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

        case "j":
                var snare= new Audio('sounds/snare.mp3');
                snare.play();
                break;

        case "k":
                var crash= new Audio('sounds/crash.mp3');
                crash.play();
                break;

        case "l":
                var kick= new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

        default:
            break;
    }
    
    // this.innerHTML="p";
    
    // alert("I got clicked");
} 


function playaniamtion(key){

    let activeButtonPressed   = document.querySelector("."+key);
    activeButtonPressed.classList.add("pressed");

        setTimeout(function(){
           activeButtonPressed.classList.remove("pressed");

        },100);

}


// var audio= new Audio('sounds/tom-1.mp3');
// audio.play();