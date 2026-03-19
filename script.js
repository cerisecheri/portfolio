
let edu = document.getElementById("edu");

    function openEdu(){
        edu.classList.add("open-edu");
    }
    function closeEdu(){
        edu.classList.remove("open-edu");
    }
    
let certif = document.getElementById("certif");

    function openCertif(){
        certif.classList.add("open-certif");
    }
    function closeCertif(){
        certif.classList.remove("open-certif");
    }

let proj = document.getElementById("proj");

    function openProj(){
        proj.classList.add("open-proj");
    }
    function closeProj(){
        proj.classList.remove("open-proj");
    }

let exp = document.getElementById("exp");
    function openExp(){
        exp.classList.add("open-exp");
    }
    function closeExp(){
        exp.classList.remove("open-exp");
    }

let games = document.getElementById("games");
    function openGames(){
        games.classList.add("open-games");
    }
    function closeGames(){
        games.classList.remove("open-games");
    }




//INTERACT THING

    interact('.education-popup, .projects-popup, .experience-popup, .certificates-popup, .games-popup')
  .draggable({
    listeners: {
      move(event) {
        const target = event.target

        let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        target.style.transform = `translate(${x}px, ${y}px)`

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
      }
    }
  })




