const article = document.querySelector(".logon-container");
const button = document.querySelector("#side-bar-btn-add");
const closebtn = document.querySelector("#side-bar-btn-close");

function showMore() {
    if (article.className == "open") {
       // read less
       article.className = "";
       button.innerHTML = "person_add";
       article.innerHTML = "";
        } else {
        //read more
        article.className = "open";
        button.innerHTML = "contact_mail";
        article.innerHTML = `
            <div class="logon-container"> <!-- START OF PAGE CONTAINERS -->
                <div class="window" style="left: 25vw; top: 10vh;">
                    <div class="resizer corner tl"></div>
                    <div class="resizer corner tr"></div>
                    <div class="resizer corner bl"></div>
                    <div class="resizer corner br"></div>
                    <div class="resizer t"></div>
                    <div class="resizer b"></div>
                    <div class="resizer l"></div>
                    <div class="resizer r"></div>
                
                        <div class="body">
                        <div class="topbar">
                
                            <!-- add buttons here -->
                            <div class="btns">
                            <span id="side-bar-btn-close" class="material-symbols-rounded" onclick="Close()">cancel</span>
                            <p id="window-title" style="float: right">Please select the model you'd prefer.</p>
                            </div>
                            <!-- add buttons here -->
                
                        </div>
                        <!-- your content here -->
                        
                        <!-- your content here -->
                        </div>
                    </div>
                <!-- JAVA GOES HERE -->
            </div> <!-- END OF PAGE CONTAINERS -->
            `;
    const xwindow = document.querySelector(".window")
    const topbar = document.querySelector(".topbar")
    topbar.addEventListener("mousedown", mousedown)

        function mousedown(e){
        window.addEventListener("mousemove", mousemove)
        window.addEventListener("mouseup", mouseup)
        let prevX = e.clientX
        let prevY = e.clientY
        function mousemove(e){
            let newX = e.clientX - prevX
            let newY = e.clientY - prevY
            const rect = xwindow.getBoundingClientRect()
            xwindow.style.left = rect.left + newX + "px"
            xwindow.style.top = rect.top + newY + "px"
            prevX = e.clientX
            prevY = e.clientY
        }
            function mouseup(){
                window.removeEventListener("mousemove", mousemove)
                window.removeEventListener("mouseup", mouseup)
            }
        }
        const resizers = document.querySelectorAll(".resizer")

for (let resizer of resizers){
  resizer.addEventListener("mousedown", mousedown)
  function mousedown(e){
    let currentResizer = e.target
    let prevX = e.clientX
    let prevY = e.clientY
    window.addEventListener("mousemove", mousemove)
    window.addEventListener("mouseup", mouseup)
    function mousemove(e){
      const rect = xwindow.getBoundingClientRect()
      if(currentResizer.classList.contains("br")){
        xwindow.style.width = rect.width + (e.clientX - prevX) + "px"
        xwindow.style.height = rect.height + (e.clientY - prevY) + "px"
      }
      else if(currentResizer.classList.contains("bl")){
        xwindow.style.width = rect.width + (prevX - e.clientX) + "px"
        xwindow.style.height = rect.height + (e.clientY - prevY) + "px"
        xwindow.style.left = rect.left + (e.clientX - prevX) + "px"
      }
      else if(currentResizer.classList.contains("tr")){
        xwindow.style.width = rect.width + (e.clientX - prevX) + "px"
        xwindow.style.height = rect.height + (prevY - e.clientY) + "px"
        xwindow.style.top = rect.top + (e.clientY - prevY) + "px"
      }
      else if(currentResizer.classList.contains("tl")){
        xwindow.style.width = rect.width + (prevX - e.clientX) + "px"
        xwindow.style.height = rect.height + (prevY - e.clientY) + "px"
        xwindow.style.top = rect.top + (e.clientY - prevY) + "px"
        xwindow.style.left = rect.left + (e.clientX - prevX) + "px"
      }
      else if(currentResizer.classList.contains("t")){
        xwindow.style.height = rect.height + (prevY - e.clientY) + "px"
        xwindow.style.top = rect.top + (e.clientY - prevY) + "px"
      }
      else if(currentResizer.classList.contains("b")){
        xwindow.style.height = rect.height + (e.clientY - prevY) + "px"
      }
      else if(currentResizer.classList.contains("l")){
        xwindow.style.width = rect.width + (prevX - e.clientX) + "px"
        xwindow.style.left = rect.left + (e.clientX - prevX) + "px"
      }
      else if(currentResizer.classList.contains("r")){
        xwindow.style.width = rect.width + (e.clientX - prevX) + "px"
      }
      prevX = e.clientX
      prevY = e.clientY
    }
    function mouseup(){
      window.removeEventListener("mousemove", mousemove)
      window.removeEventListener("mouseup", mouseup)
    }
  }
}
    }
}

function Close() {
    // read less
    article.className = "";
    button.innerHTML = "person_add";
    article.innerHTML = "";
}

