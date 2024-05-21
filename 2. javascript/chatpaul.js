const chatInput = document.querySelector("#chat-input");
const chatContainer = document.querySelector(".chat-container");
const deleteButton = document.querySelector("#nav-icon-delete");
const downloadButton = document.querySelector("#nav-icon-download");

let userText = null;
const API_KEY = ""; //FIXME: PLACE API KEY HERE
const initialHeight = chatInput.scrollHeight;

// "START OF DEFAULT TEXT"
const DeText = () => {
  const defaultText = `
  <div class="text-default">
  <h1> SCEAS AI ASSISTANT </h1>
  <p>"At ICTTM, we are committed to equipping businesses, organizations, and governments with the resources and insights they require to make informed decisions and flourish in a rapidly evolving global landscape."</p>
  <p>This model is called: Development-n063-INT-USE-ONLY-Marcus-Tipler</p>
  <p>This is a CONFIDENTIAL INTERNAL BUILD that is not permitted for use outside the ICTTM, the ITC and Business Compass respectively.</p>
  </div>
`;

  chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
};

DeText(); // LOAD the Default Text VARIABLE called "DeText"

const createElement = (html, className) => {
  // This is to create a New Div in the HTML code section
  const chatDiv = document.createElement("div");
  chatDiv.classList.add("chat", className);
  chatDiv.innerHTML = html;
  return chatDiv; //This is to return the created Chat Div
};

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

const copyResponse = (copyBtn) => {
  // This is to allow the copy button per response, to function as intended
  const responseTextElement = copyBtn.parentElement.querySelector("p");
  navigator.clipboard.writeText(responseTextElement.textContent);
  copyBtn.textContent = "done";
  setTimeout(() => (copyBtn.textContent = "content_copy"), 1000);
};

const showTypingAnimation = () => {
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
  // This is to create an outgoing Chat Div with the Bot Typing Animation Message and append it to the chat container
  const incomingChatDiv = createElement(html, "incoming");
  chatContainer.appendChild(incomingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);
  getChatResponse(incomingChatDiv);
};

const handleOutgoingChat = () => {
  userText = chatInput.value.trim(); // This is to receive the value and to remove the extra spaces.
  if (!userText) return; // If the User' chat box is empty, it will return from here.

  chatInput.value = ""; // reset text box for the chat
  chatInput.style.height = `${initialHeight}px`; //reset the chatbox height after sending the message

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

// "END OF DEFAULT TEXT"





deleteButton.addEventListener("click", () => {
  // This is to delete all of the chats from the local storage as soon as delete button is pressed and confirmed
  if (
    confirm(
      "Are you sure you'd like to delete all previous conversations with AI MARCUS?"
    )
  ) {
    localStorage.removeItem("all-chats");
    DeText();
  }
});

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${initialHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// START OF LISTEN FOR ENTER KEY PRESS
chatInput.addEventListener("keydown", (e) => {
  //Stopping the enter key from going down a line but forcing it to send the message
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleOutgoingChat();
  }
});
// END OF LISTEN FOR ENTER KEY PRESS

downloadButton.addEventListener("click", () => {
  // This is to delete all of the chats from the local storage as soon as delete button is pressed and confirmed
  if (
    confirm(
      "Are you sure you'd like to delete all previous conversations with AI MARCUS?"
    )
  ) {
    localStorage.removeItem("all-chats");
    DeText();
  }
});