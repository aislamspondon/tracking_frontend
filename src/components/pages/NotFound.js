import React from "react";
import { Container, Image } from "react-bootstrap";
import notfound from "../../assets/notFound.jpg";

// 404 Not found
function NotFound() {
  return (
    <Container>
      <div>
        <h3 className="Heads">Page not found</h3>
        <Image
          src={notfound}
          alt="404 Error. Page not found."
          className="image"
        />
      </div>
    </Container>
  );
}

export default NotFound;
