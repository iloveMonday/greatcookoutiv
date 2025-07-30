function rand(){
    return Math.floor(Math.random() * 10);
}

window.onload = function() {
    upDate();
    updateDay();
    monthBackground();
};


let personal = document.getElementById("personal");
let monthSlider = document.getElementById("month-slider");
let daySlider = document.getElementById("day-slider");
let dayDisp = document.getElementById("day-disp");
let dateDisplay = document.getElementById("date-display");
let testBox = document.getElementById("test-pic-box");
let bringButton = document.getElementById("bring-button");
let bringBox = document.getElementById("bring-box");
let slide = 1;




function monthBackground(){
    let month = monthSlider.value;
    personal.className = "lessen";
    personal.style.backgroundImage = "url('./months/" + month +".jpg')"
}

monthSlider.addEventListener("input", ()=>{
    upDate();
    monthBackground();
})

daySlider.oninput = function () {
    upDate();
    updateDay();
};

function updateDay(){
      dayDisp.innerHTML = "";

  for (let i = 0; i < daySlider.value; i++) {
    let img = document.createElement("img");
    img.src = "./corn.svg";
    img.className = "corn"
    dayDisp.appendChild(img);
  }
}

function upDate(){
    let month = monthMan(monthSlider.value);
    let day = daySlider.value
    dateDisplay.innerHTML = month + " " + day
}


// function newTestPics(num){
//     let pic1 = document.getElementById("pic1");
//     let pic2 = document.getElementById("pic2");
//     let pic3 = document.getElementById("pic3");
//     let pic4 = document.getElementById("pic4");

//     pic1.src = './test/' + num + '.1.jpg';
//     pic2.src = './test/' + num + '.2.jpg';
//     pic3.src = './test/' + num + '.3.jpg';
//     pic4.src = './test/' + num + '.4.jpg';
// }

function newTestSlide(num){
    testBox.innerHTML = '';

    let pic1 = document.createElement("img");
    let pic2 = document.createElement("img");;
    let pic3 = document.createElement("img");;
    let pic4 = document.createElement("img");;

    pic1.src = './test/' + num + '.1.jpg';
    pic2.src = './test/' + num + '.2.jpg';
    pic3.src = './test/' + num + '.3.jpg';
    pic4.src = './test/' + num + '.4.jpg';

    pic1.className = 'test-pic'
    pic1.id = 'pic1'
    pic2.className = 'test-pic'
    pic2.id = 'pic2'
    pic3.className = 'test-pic'
    pic3.id = 'pic3'
    pic4.className = 'test-pic'
    pic4.id = 'pic4'

    testBox.appendChild(pic1);
    testBox.appendChild(pic2);
    testBox.appendChild(pic3);
    testBox.appendChild(pic4);
}


testBox.addEventListener("click", ()=>{
    slide++;
    newTestSlide(slide)
})





const images = [
    "./bring/banana.png",
    "./bring/banhmi.png",
    "./bring/beanbag.png",
    "./bring/beyondburger.png",
    "./bring/beyondchicken.png",
    "./bring/bll.png",
    "./bring/boca.png",
    "./bring/breadsticks.png",
    "./bring/cake.png",
    "./bring/campchair.png",
    "./bring/campchair2.png",
    "./bring/chair1.png",
    "./bring/chair2.png",
    "./bring/chair3.png",
    "./bring/cillian.png",
    "./bring/condiment.png",
    "./bring/corn.png",
    "./bring/crab.png",
    "./bring/djembe.png",
    "./bring/doritoblazin.png",
    "./bring/doritocoolranch.png",
    "./bring/doritohand.png",
    "./bring/doritosweetchili.png",
    "./bring/drpepper.png",
    "./bring/dvd.png",
    "./bring/freezepop.png",
    "./bring/greendrinky.png",
    "./bring/hardseltz.jpg",
    "./bring/holiday-seltzer.jpg",
    "./bring/hotdog.png",
    "./bring/hotdogbuns.png",
    "./bring/ice2.png",
    "./bring/icebag.png",
    "./bring/icy.png",
    "./bring/icecream.png",
    "./bring/juul.png",
    "./bring/lola.png",
    "./bring/maddog.png",
    "./bring/mastercom.png",
    "./bring/ModeloEspecial.png",
    "./bring/mozz.png",
    "./bring/mustard.png",
    "./bring/pastasalad.png",
    "./bring/pickle.png",
    "./bring/pickle2.png",
    "./bring/plasticfork.png",
    "./bring/salad.png",
    "./bring/seltzy.png",
    "./bring/seltzy2.png",
    "./bring/seltzy3.png",
    "./bring/seltzy4.png","./bring/chair4.png","./bring/cloud.png","./bring/dumpling.png","./bring/franzia.png",
    "./bring/shrimp.png", "./bring/fritos.png","./bring/moleman.png","./bring/molemann.png","./bring/wine.png",
    "./bring/slaw.png","./bring/solo.png","./bring/sonic.png","./bring/sonicare.png","./bring/sweetbabyrays.png","./bring/tobin.png", "./bring/mcdondon.png",
    "./bring/egg.png", "./bring/spice.png", "./bring/gruel.png", 
    "./bring/whiteclaw.png","./bring/whiteclawpure.png","./bring/zatlas.gif","./bring/zjoker.gif", "./bring/zlion.gif", "./bring/slop-vial.png", "./bring/slop2.png",
];


function getRandomImage(){
    if (images.length > 0){
        let randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }
    else{
        return './pics/spirited-away-food.gif'
    }
}

function bringIt(num){
    let item = document.createElement("img")
    // item.src = "./bring/banhmi.png";
    item.src = getRandomImage();
    item.className = "floating"+num;
    item.classList.add("item");
    bringBox.appendChild(item);
}

bringButton.addEventListener("click", ()=>{
    let notIt = document.getElementById("not-it")
    notIt.classList.remove("bye");
    bringBox.innerHTML = '';
    for (i=0; i<3; i++)
    {bringIt(i);}
    console.log("hi")
})




function monthMan(num){
    if (num ==1){
        return "Jan"
    }
    else if (num ==2){
        return "Feb"
    }
    else if (num ==3){
        return "Mar"
    }
    else if (num ==4){
        return "Apr"
    }
    else if (num ==5){
        return "May"
    }
    else if (num ==6){
        return "Jun"
    }
    else if (num ==7){
        return "Jul"
    }
    else if (num ==8){
        return "Aug"
    }
    else if (num ==9){
        return "Sep"
    }
    else if (num ==10){
        return "Oct"
    }
    else if (num ==11){
        return "Nov"
    }
    else if (num ==12){
        return "Dec"
    }
    else return "Other"
    

}