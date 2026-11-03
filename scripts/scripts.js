document.getElementById("navbar").innerHTML = `<a href="index.html">Home</a>
<a href="resume.html">Resume</a><a href="portfolio.html">Portfolio</a>`;

document.getElementById("footer").innerHTML = `<a href="https://www.linkedin.com/in/mugdhareddyvuyyuru/">LinkedIn</a>
<a href="https://app.joinhandshake.com/profiles/sd46p9">Handshake</a>`;

const leadership = document.getElementById("leadership");

leadership.addEventListener("click", () => {
    const leadershipSection = document.getElementById("leadershipSection");
    leadershipSection.hidden = !leadershipSection.hidden;
    if (leadershipSection.hidden) {
        leadership.textContent = "Show Leadership & Activities";
    }
    else {
        leadership.textContent = "Hide Leadership & Activities";
    }
});
