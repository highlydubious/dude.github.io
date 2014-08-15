megamanFrameNum = 0;
megamanLeftX    = 0;
megamanTopX     = 0;


function animateMegaman() {

  var megaman = document.getElementById("megaman");

  switch (megamanFrameNum) {
    case 0:
      megaman.style.backgroundPositionX = "-162px";
      break;

    case 1:
      megaman.style.backgroundPositionX = "-352px";
      break;

    case 2:
      megaman.style.backgroundPositionX = "-468px";
      break;

    case 3:
      megaman.style.backgroundPositionX = "-1px";
      break;
  };

  // repeats the sequence 0, 1, 2, 3

megamanFrameNum = (megamanFrameNum + 1) % 4; 

   //  window.setTimeout(animateMegaman, 1000); //
}


function moveMegaman(keyEvent) {

  console.log(keyEvent.keyCode);

var megaman = document.getElementById("megaman");

if (keyEvent.keyCode === 39) { 
  megaman.style.backgroundPositionY = "0px";
    megamanLeftX += 50;
    megaman.style.left = megamanLeftX + "px";
    animateMegaman();
  }
  if (keyEvent.keyCode === 37) {
    
    megaman.style.backgroundPositionY = "185px";
    megamanLeftX -= 50;
    megaman.style.left = megamanLeftX + "px";
    animateMegaman();
  }

  if (keyEvent.keyCode === 38) {
    megamanTopX -= 50;
    megaman.style.top = megamanTopX + "px";
    animateMegaman();
  }

  if (keyEvent.keyCode === 40) {
    megamanTopX += 50;
    megaman.style.top = megamanTopX + "px";
    animateMegaman();
  }
  
}

function startup() {
  
  window.addEventListener("keydown", moveMegaman);
}

window.onload = startup;







