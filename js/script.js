/* ============================== typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["Web Designer","UI/UX Designer", "UI Developer", "UX Researcher"],
    typeSpeed: 60,
    BackSpeed: 40,
    loop: true
})

document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Zahra-Faraji-CV.pdf'; // Path to your PDF file
    link.download = 'Zahra-Faraji-CV.pdf'; // The name to save the file as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('downloadButtonIt').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'ZahraFaraji-CV(IT).pdf';
    link.download = 'ZahraFaraji-CV(IT).pdf';
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