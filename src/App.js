import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    // { username: "sammy", message: "hello man" },
    // { username: "emma", message: "am goood" },
    // { username: "nze", message: "xup chief" },
  ]);
  const [username, setUsername] = useState("");
  // console.log(messages);

  useEffect(() => {
    // pull mesg from db
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({id : doc.id , message: doc.data()})));
      });
  }, []);
  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, []);

  // console.log(username);
  const sendMsg = (e) => {
    e.preventDefault();

    // push msg to db
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // get all msgs and append incoming ones
    // setMessages([...messages, {username:username, message:input}]);
    setInput("");
  };
  return (
    <div className="App">
      <img className="App-logo" src="https://static.xx.fbcdn.net/rsrc.php/yd/r/hlvibnBVrEb.svg"/>
      <h1>Messenger Clone</h1>
      <p>Welcome {!username ? 'Guest' : username} </p>
      {/* to make the enter key work wrap the input and btn inside a form  and set btn type to submit */}

      <form className="form">
        <FormControl className="form-control">
          <Input className="form-input" placeholder="enter a message...." value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton className="form-icon"  variant="contained"
            color="primary"
            type="submit"
            onClick={sendMsg}
            disabled={!input}>
            <SendIcon/>
          </IconButton>


          {/* <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMsg}
            disabled={!input}
          >
            send message
          </Button> */}
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
