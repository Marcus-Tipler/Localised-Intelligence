// Sample chat data
const chats = [
    { id: "1", title: "Chat 1" },
    { id: "2", title: "Chat 2" },
    // Add as many chats as needed
  ];
  
  
  const chatList = document.getElementById('chat-list');
  
  
  chats.forEach((chat) => {
    const chatItem = document.createElement("button");
    chatItem.id = `chat-${chat.id}`;
    chatItem.className = "chat";
    chatItem.innerHTML = `<p>${chat.title}</p>`;
  
  
    chatList.appendChild(chatItem);
  
  
    chatItem.addEventListener("click", () => {
      console.log(chatItem);
      // Implement functionality for showing the selected chat here, e.g., by loading and displaying its messages or content in a separate div or modal.
    });
  });