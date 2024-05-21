//FIXME: TITLE = CHAT.JS

//TODO: TITLE = CHAT.JS




//FIXME: TITLE = EVNTLSTNER.JS
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
                        <div class="chat-config-options"> <!-- FIXME: new content to configure -->
                            <p>This is a title</p>
                            <div class="chat-bot-selection"> <!-- FIXME: new content to configure -->
                            <select class="form-select" id="model-select" style="width: auto;"></select> <!-- FIXME: new content to configure -->
                            <button class="addbot">AddNewBot</button>
                            </div>
                        </div>
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

    const AddChatBot = document.querySelector(".addbot");
        AddChatBot.addEventListener("click", () => {
            console.log("clicked");
            console.log("Current Chat Amount 1 = " + currentChatAmount);
            console.log("Initial Chat Amount 1 = " + initialChatAmount);
            initialChatAmount = currentChatAmount;
            currentChatAmount = currentChatAmount + 1;
            console.log("Current Chat Amount 2 = " + currentChatAmount);
            console.log("Initial Chat Amount 2 = " + initialChatAmount);
            var testObject = { id: currentChatAmount, title: "Chat " + currentChatAmount } && { id: "test", title: "Chat " + "test" };
            var previoustestObject = testObject + ", ";
            localStorage.setItem('testObject', JSON.stringify(testObject));
            updateList();
        })
    }
}

function Close() {
    // read less
    article.className = "";
    button.innerHTML = "person_add";
    article.innerHTML = "";
}
//TODO: TITLE = EVNTLSTNER.JS




//FIXME: TITLE = LOGIN.JS


//TODO: TITLE = LOGIN.JS




//FIXME: TITLE = THEME.JS
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
//TODO: TITLE = THEME.JS




//FIXME: TITLE = WINDOW-MNGNT.JS


//TODO: TITLE = WINDOW-MNGNT.JS




//FIXME: TITLE = CHAT SELECTION MANAGEMENT
function selectedpaul() {
    console.log("selectedPAUL");
}
function selectedgpt() {
    console.log("selectedGPT");
}
//TODO: TITLE = CHAT SELECTION MANAGEMENT

//FIXME: TESTING SYSTEM FIXME: TESTING SYSTEM
//FIXME: TESTING SYSTEM FIXME: TESTING SYSTEM
//FIXME: TESTING SYSTEM FIXME: TESTING SYSTEM
//FIXME: TESTING SYSTEM FIXME: TESTING SYSTEM

    //FIXME: BUTTON DECLARATIONS
    const deleteButton = document.querySelector("#nav-icon-delete"); // THIS MIGHT NO LONGER BE NECESSARY.
    const downloadButton = document.querySelector("#nav-icon-download");
    const chatButton = document.querySelector("#nav-icon-download");
    const deleteSideButton = document.querySelector("#side-bar-btn-delete");
    const dupeSideButton = document.querySelector("#nav-icon-download");
    const addSideButton = document.querySelector("#side-bar-btn-duplicate");
    //TODO: BUTTON DECLARATIONS



    //FIXME: AREA DECLARATIONS
    const chatInput = document.querySelector("#chat-input");
    const chatContainer = document.querySelector(".chat-container");
    //TODO: AREA DECLARATIONS



    //FIXME: BUTTON FUNCTIONS
    deleteButton.addEventListener("click", () => {
        if (
        confirm(
            "Are you sure you'd like to delete all previous conversations with AI MARCUS?"
        )
        ) {
        localStorage.removeItem("all-chats");
        DeText();
        }
    });
    //TODO: BUTTON FUNCTIONS



    //FIXME: DEFAULTS
    let userText = null;
    const API_KEY = ""; //FIXME: PLACE API KEY HERE
    const initialHeight = chatInput.scrollHeight;

    const DeText = () => {
        const defaultText = `
        <div class="text-default">
        <h1> Marcus AI Assistant </h1>
        <p>This AI web page was developed for and in collaboration with the ITC.</p>
        <p>This model is called: Development-Marcus-Tipler</p>
        <p>Please place API KEY on line 260 in "/2. javascript/index.js". The goal is to implement Ollama Model PAUL developed for the ITC within the JavaScript of this application / portal.</p>
        </div>
    `;
    
        chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
    };

    DeText()
    //TODO: DEFAULTS



    //FIXME: CHAT DIV CREATE
    const createElement = (html, className) => {
        const chatDiv = document.createElement("div");
        chatDiv.classList.add("chat", className);
        chatDiv.innerHTML = html;
        return chatDiv;
    };
    //TODO: CHAT DIV CREATE



    //FIXME: ANIMATION BUBBLES
    const showTypingAnimation = () => { // CREATE A DIVIDER FOR TYPING ANIMATIONS
        const html = `<div class="chat-content">
                        <div class="chat-details">
                        <img src="/1. Images/bot.jpg" alt="bot logo">
                            <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                            </div>
                        </div>
                    <span onclick="copyResponse(this)" class="material-symbols-rounded">content_copy</span>
                    </div>`;
        const incomingChatDiv = createElement(html, "incoming");
        chatContainer.appendChild(incomingChatDiv);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        getChatResponse(incomingChatDiv); // TODO: VARIABLE TO APPLY / CREATE
    };

    function unshowTypingAnimation() { 
    // HIDE THE ANIMATION IN NEW DIVIDER 
        incomingChatDiv.querySelector(".typing-animation").remove();
        incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        localStorage.setItem("all-chats", chatContainer.innerHTML);
    };
    //TODO: ANIMATION BUBBLES



    //FIXME: TRIM USER TEXT
    function ClearUserText() {
        userText = chatInput.value.trim(); // RECEIVE USER TEXT AND REMOVE EXTRA SPACES
        if (!userText) return; // IF USER TEXT = NULL THEN DON'T DO ANYTHING.
    }
    //TODO: TRIM USER TEXT



    //FIXME: REPLACE TYPING ANIMATIONS WITH RESPONSE CONTENT
    const handleOutgoingChat = () => { //VARIABLE REQUESTED ON "MANAGE USER INPUT" USING ENTER KEY
        ClearUserText(); 

        chatInput.value = ""; // RESET TEXT BOX FOR NEXT USER TEXT
        chatInput.style.height = `${initialHeight}px`; // MAKE CHAT BOX HEIGHT ITS ORIGINAL SIZE BEFORE ANIMATIONS BEFORE PROCEEDING WITH REPLACING ITS CONTENTS
    
        const html = `<div class="chat-content">
                        <div class="chat-details">
                            <img src="/1. Images/user.jpg" alt="user logo">
                            <p></p>
                        </div>
                    </div>`;
        // This is to create an outgoing Chat Div with the Users Message and append it to the chat container
        const outgoingChatDiv = createElement(html, "outgoing");
        outgoingChatDiv.querySelector("p").textContent = userText;
        document.querySelector(".default-text")?.remove();
        chatContainer.appendChild(outgoingChatDiv);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        setTimeout(showTypingAnimation, 500);
    };
    //TODO: REPLACE TYPING ANIMATIONS WITH RESPONSE CONTENT



    //FIXME: MANAGE USER TEXT INPUT
    chatInput.addEventListener("input", () => {
        chatInput.style.height = `${initialHeight}px`;
        chatInput.style.height = `${chatInput.scrollHeight}px`;
    });

    // START OF LISTEN FOR ENTER KEY PRESS
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleOutgoingChat();
        }
    });
    // END OF LISTEN FOR ENTER KEY PRESS
    //TODO: MANAGE USER TEXT INPUT



    //FIXME: CHAT COUNTER
    //BELLOW THIS IS HELP SECTION NOT CODE
    //localStorage.setItem("all-chats", chatContainer.innerHTML);
    //localStorage.removeItem("all-chats");
    //localStorage.getItem("all-chats") || defaultText;
    //ABOVE THIS IS HELP SECTION NOT CODE
    var initialChatAmount = 1;
    var currentChatAmount = 1;
    var previousChatID = 1;
    var currentChatID = 1;
    const tmptitle = "Welcome";

    //var testObject ={ id: "1", title: "Chat 1" };
    //localStorage.setItem('testObject', JSON.stringify(testObject));
    //var retrievedObject = localStorage.getItem('testObject');
    //console.log('retrievedObject: ', JSON.parse(retrievedObject));
    // OUTPUT OF SUCH = {name: 'test', time: 'Date 2017-02-03T08:38:04.449Z'}

    var retrievedObject = localStorage.getItem('testObject');

    const chats = [ //TEMPORARY LOCAL STORAGE
        { id: "1", title: "Chat 1" },
        JSON.parse(retrievedObject)
        // MORE CHATS GO HERE
        // script to add chats to localstorage (localstorage get item code might replace the need for these ligns of code.)
    ];
    
    
    const chatList = document.getElementById('chat-list');
    
function updateList() {
    chats.forEach((hero) => {
        const chatItem = document.createElement("button");
        chatItem.id = `chat-${hero.id}`;
        chatItem.className = "chat";
        chatItem.innerHTML = `<p>${hero.title}</p>`;
    
        function AppendToList() {
            chatList.appendChild(chatItem);
        }
        AppendToList(); // ADDING THE THE VARIABLE CHAT LIST: THE CONTENTS OF THE VARIABLE ChAT ITEM.
    
    
        chatItem.addEventListener("click", () => {
        console.log(hero.id);
        // script to unload previous chat id from local storage
        // script to load new chat id from local storage
        // Implement functionality for showing the selected chat here, e.g., by loading and displaying its messages or content in a separate div or modal.
        });
    });
};
updateList();
    // script to add chats to localstorage (localstorage set item)
    // script to add chats to localstorage (localstorage set item)
    // script to add chats to localstorage (localstorage set item)
    deleteSideButton.addEventListener("click", () => {
        console.log("deleteAll");
        localStorage.removeItem("testObject");
    })
    //TODO: CHAT COUNTER



    //FIXME: CHAT RESPONSE FROM GPT

    const getChatResponse = async (incomingChatDiv) => {
        const API_URL = "https://api.openai.com/v1/completions";
        const pElement = document.createElement("p");
    
        // The properties / data / settings for the API will be here
        const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`, //INSERT BEARER DETAILS HERE
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo-instruct",
              prompt: userText,
              max_tokens: 2048,
            }),
        };
    
        // This sends the request to the API in order to get a resposne as a paragraph element
        try {
        const response = await (await fetch(API_URL, requestOptions)).json();
        pElement.textContent = response.choices[0].text.trim();
        } catch (error) {
        pElement.classList.add("error");
        pElement.textContent =
            "Oops, something went wrong while retrieving the response. Please try again later.";
        }
    
        // this is for Removing the animations once a response has been found, then replaces it with response and saving it to local storage
        incomingChatDiv.querySelector(".typing-animation").remove();
        incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
        chatContainer.scrollTo(0, chatContainer.scrollHeight);
        localStorage.setItem("all-chats", chatContainer.innerHTML);
    };
    //TODO: CHAT RESPONSE FROM GPT