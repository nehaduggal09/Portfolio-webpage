function toggleAbout() {
    let about = document.getElementById("about-text");

    if (about.style.display === "none") {
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }
}

function showWelcome() {
    document.getElementById("welcome").innerText =
        "Welcome to Neha's Portfolio!";
}

function countSkills() {
    let skills = document.querySelectorAll(".skills-box li");

    document.getElementById("skill-count").innerText =
        "Total Skills: " + skills.length;
}

function changeColor() {
    document.body.style.backgroundColor = "#e6f7ff";
}