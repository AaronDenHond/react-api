import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu inverted>
      <Container>
        <Link to="/">
          <Menu.Item name="Home" />
        </Link>
        <Link to="/People">
          <Menu.Item name="People" />
        </Link>
        <Link to="/Starships">
          <Menu.Item name="Starships" />
        </Link>
      </Container>
    </Menu>
  );
}
