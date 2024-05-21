const themeButton = document.querySelector("#nav-icon-theme"); //Theme Button Declaration

// "START OF LIGHT / DARK MODE TOGGLE"
const ClDefaults = () => { // CREATE the Color Defaults VARIABLE called "ClDefaults"
    const themeColor = localStorage.getItem("theme-color");
  
    document.body.classList.toggle("dark-mode", themeColor === "dark_mode");
    themeButton.innerText = document.body.classList.contains("dark-mode")
      ? "dark_mode"
      : "light_mode";
  }
  
  themeButton.addEventListener("click", () => { // Toggle the light mode / dark mode and save it to local storage
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme-color", themeButton.innerText);
    themeButton.innerText = document.body.classList.contains("light-mode")
      ? "dark_mode"
      : "light_mode";
  });
  
  ClDefaults(); // LOAD the Color Defaults VARIABLE called "ClDefaults"
  // "END OF LIGHT / DARK MODE TOGGLE"