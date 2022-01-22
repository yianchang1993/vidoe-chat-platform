import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "../SocketContext";
const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  console.log(call.isReceivedCall)
  console.log(callAccepted)
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is calling</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
