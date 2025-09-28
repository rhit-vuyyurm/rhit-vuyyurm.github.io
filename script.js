document.addEventListener("DOMContentLoaded", () => {
    if(aboutBtn)
  alert("Welcome to my portfolio site!");
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutBox = document.getElementById("aboutBox");
  const closeBtn = document.getElementById("closeBtn");
  const rosieBtn = document.getElementById("rosieBtn");
  const rosieBox = document.getElementById("rosieBox");
  const closeRosieBtn = document.getElementById("closeRosieBtn");

  if (aboutBtn && aboutBox && closeBtn){
  aboutBtn.addEventListener("click", () => {
    aboutBox.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    aboutBox.style.display = "none";
  });
  }

  if (rosieBtn && rosieBox && closeRosieBtn) {
  rosieBtn.addEventListener("click", () => {
    rosieBox.style.display = "block";
  });

  closeRosieBtn.addEventListener("click", () => {
    rosieBox.style.display = "none";
  });
  }

});
