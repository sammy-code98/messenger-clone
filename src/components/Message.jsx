import { Card, CardContent, Typography } from "@material-ui/core";
import React ,{forwardRef} from "react";
import "../Message.css";


const Message = forwardRef(({ message, username }, ref)=> {
  // check if user is logged in
  const isUser = username === message.username;

  return (
    <div  ref={ref} className={`msg-card  ${isUser && 'msg_user'}`}>
      <Card className={isUser ? 'msg-usercard': 'msg_guescard'}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || 'Unknown User'} says::`}  {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
    //    <p>{props.username}: {props.msg}</p>
  );
})

export default Message;
