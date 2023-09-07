import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Form
      className="lobby"
      onSubmit={(e) => {
        e.preventDefault();
        joinRoom(user, room);
      }}
    >
      <Form.Group>
        <Form.Control
          placeholder="name"
          onChange={(e) => setUser(e.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="room"
          onChange={(e) => setRoom(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button
        variant="success"
        type="submit"
        disalbed={(user.length > 0) & (room.length > 0)}
      >
        Join
      </Button>
    </Form>
  );
};

export default Lobby;
