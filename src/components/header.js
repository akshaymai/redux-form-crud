import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import GoogleOauth from "./googleOauth";

const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/">stremas</Link>
          </div>

          <div>
            <Link to="/"> all stremas</Link>
          </div>
          <div>
            <GoogleOauth />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default Header;
