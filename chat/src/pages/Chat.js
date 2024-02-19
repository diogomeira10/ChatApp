import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Chat({ user,list, setList }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    fetch(`/api/messages/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data.messages);
      })
      .catch((error) => console.error("Error fetching messages:", error));
  }, [user]);

  //comment

  //STATE
  
  const [friend, setFriend] = useState("");
  const [message, setMessage] = useState("");
  console.log(list);
  console.log(friend);
  console.log(message);

  //HANDLERS
  const handleClick = (clUser) => {
    setFriend(clUser);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (!friend || !message) {
      return;
    }

    const newMessage = {
      from: user,
      to: friend,
      content: message,
      dateInMs: Date.now(),
    };

    fetch(`/api/messages/${user}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data.messages);
      })
      .catch((error) => console.error("Error sending message:", error));

    setMessage("");
  };

  //LISTS
  
const relevantMessages = list.filter(message => message.from === user || message.to === user);


/* const uniqueUsers = [...new Set(relevantMessages.map(message => message.from !== user ? message.from : message.to))]; */


const renderedUsers = relevantMessages.reduce((acc, message) => {
    const sender = message.from !== user ? message.from : message.to;
    if (sender !== user && !acc.includes(sender)) {
      acc.push(sender);
    }
    return acc;
  }, []).map((userName, i) => (
    <div key={i} onClick={() => handleClick(userName)} className="border text-white h-20">
      {userName}
    </div>
  ));

const filteredList = list.filter(element => (
    (element.from === user && element.to === friend) || 
    (element.from === friend && element.to === user)
));

const renderedFilteredList = filteredList.map((element,index) => {

    const isUserMessage = element.from === user;
    const messageClass = isUserMessage ? 'bg-green-500 ml-auto mr-4' : 'bg-gray-500 mr-auto ml-4';



    return (
        <div key={index} className={`rounded-lg p-2 mb-2 max-w-md ${messageClass}`}>
            {element.content}
        </div>
    );
})

/* const renderedMessages = list.map((element, index) => {
    const isUserMessage = element.from === user;
    const messageClass = isUserMessage ? 'bg-green-500 ml-auto' : 'bg-gray-500 mr-auto';
    
    return (
        <div key={index} className={`rounded-lg p-2 mb-2 max-w-md ${messageClass}`}>
            {element.content}
        </div>
    );
}); */



  /* const renderedMessages = list.map((element) => {
    return <div>{element.content}</div>
  });


  const renderedFriendMessages = list.map((message) => {
    return <div>{message.content}</div>
}) */

  /*  const renderedList = list.map((message, index) => (
        <div key={index}>
            <p>From: {message.from}</p>
            <p>To: {message.to}</p>
            <p>Content: {message.content}</p>
            <p>Date: {new Date(message.dateInMs).toLocaleString()}</p>
            <hr />
        </div>
    )); */

    return (
        <div className="bg-slate-500 h-screen flex relative">
          <div className="border border-black h-screen w-1/3 flex flex-col gap-1">{renderedUsers}</div>
          <div className="border border-black h-screen w-2/3 text-white relative">
            {/* {renderedMessages}
            {renderedFriendMessages} */}
            {renderedFilteredList}
            
            <form onSubmit={handleMessageSubmit} className="absolute bottom-0 w-full">
              <input className="w-full text-black px-4 py-2" onChange={handleMessageChange} value={message} type="text" />
            </form>
          </div>
        </div>
      );
      
}
