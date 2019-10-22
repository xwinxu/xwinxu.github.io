particlesJS.load("particles-js", "particles.json",
    function () {
        console.log("particles.json loaded...")
    })

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var atTop = document.getElementById('scrollable');
    // if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.top = "0";
    // } else {
    //     document.getElementById("navbar").style.top = "-50px";
    // }
    if (prevScrollpos < currentScrollPos) {
        document.getElementById("navbar").style.top = "-50px";
    } else {
        document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
}

document.querySelector("#researchBtn").addEventListener("click", function() {
    this.classList.toggle('highlight');
    document.querySelector("#research").classList.toggle('hidden');
    document.querySelector("#projects").classList.add('hidden');
    document.querySelector("#projectBtn").classList.remove('highlight');
    pJSDom[0].pJS.particles.move.speed = 2;

})

document.querySelector("#projectBtn").addEventListener("click", function() {
    this.classList.toggle('highlight');
    document.querySelector("#projects").classList.toggle('hidden');
    document.querySelector("#research").classList.add('hidden');
    document.querySelector("#researchBtn").classList.remove('highlight');
    pJSDom[0].pJS.particles.move.speed = 2;
})