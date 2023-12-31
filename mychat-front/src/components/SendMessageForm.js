import React from "react";
import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message);
          setMessage("");
        }}
      >
        <InputGroup>
          <FormControl
            type="user"
            placeholder="message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button variant="primary" type="submit" disabled={!message}>
            Send
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SendMessageForm;
