import React, {useState} from 'react'
import './ChatScreen.css'

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');


    const handleSendMessage = () => {
        if (input.trim()) {
            // For simplicity, assume the current user always sends messages
            setMessages([...messages, { text: input, id: messages.length, fromUser: true }]);
            setInput('');
            
            // Simulate receiving a message from someone else
            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages, 
                    { text: "This is a reply from someone else.", id: prevMessages.length, fromUser: false }
                ]);
            }, 1000);
        }
    };

  return (
    <>
        <div className="chat-container">
            <div className="message-list">
                {messages.map(message => (
                    <div
                        key={message.id}
                        className={`message ${message.fromUser ? 'from-user' : 'from-other'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
      
    </>
  )
}

export default ChatScreen
