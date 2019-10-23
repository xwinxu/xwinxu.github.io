particlesJS.load("particles-js", "particles.json",
    function () {
        console.log("particles.json loaded...")
    })

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var atTop = document.getElementById('scrollable');
    if (prevScrollpos < currentScrollPos) {
        document.getElementById("navbar").style.top = "-50px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}

let isResearchHidden = true;
document.querySelector("#researchBtn").addEventListener("click", function() {
    this.classList.toggle('highlight');


    document.querySelector("#research").classList.toggle('hidden');
    document.querySelector("#projects").classList.add('hidden');
    isProjectHidden = true;

    document.querySelector("#projectBtn").classList.remove('highlight');

    if (isResearchHidden) {
    pJSDom[0].pJS.particles.move.speed = 2;

    } else {

    pJSDom[0].pJS.particles.move.speed = 5;
    }

    isResearchHidden = !isResearchHidden;
})

let isProjectHidden = true;
document.querySelector("#projectBtn").addEventListener("click", function() {
    this.classList.toggle('highlight');
    document.querySelector("#projects").classList.toggle('hidden');
    document.querySelector("#research").classList.add('hidden');
    document.querySelector("#researchBtn").classList.remove('highlight');
    isResearchHidden = true;
    pJSDom[0].pJS.particles.move.speed = 2;

    if (isProjectHidden) {
    pJSDom[0].pJS.particles.move.speed = 2;

    } else {

    pJSDom[0].pJS.particles.move.speed = 5;
    }

    isProjectHidden = !isProjectHidden;
})