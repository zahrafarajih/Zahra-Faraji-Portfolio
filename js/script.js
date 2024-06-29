/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["UX Designer", "UX Researcher", "UI Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Cv.pdf'; // Path to your PDF file
    link.download = 'CV.pdf'; // The name to save the file as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// open image in new page
document.addEventListener("DOMContentLoaded", function() {
    const bgImg = document.getElementById("img-big");

    bgImg.addEventListener("click", function() {
        const imageUrl = bgImg.src;
        window.open(imageUrl, '_blank');
    });
});