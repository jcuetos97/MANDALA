import React, {useState} from "react";

// CSS Style
import "../assets/css/general.css";
import "../assets/css/chatbox.css";

import Chat from "../assets/png/chat-ico.png"

const ChatBox = () => {
    const [chatBox, setChatBox] = useState(false);

    return (
        <div>
            <img className={chatBox ? "chat-icon inactive" : "chat-icon"} src={Chat} alt="Chat Icon" onClick={() => setChatBox(true)}/>
            <div className={chatBox ? "chat-popup" : "chat-popup inactive"}  id="myForm">
                <form action="" className="form-container">
                    <textarea placeholder="Type message.." name="msg" required></textarea>
                    <button type="submit" className="btn-chat">Send</button>
                    <button type="button" className="btn-chat" onClick={() => setChatBox(false)}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;