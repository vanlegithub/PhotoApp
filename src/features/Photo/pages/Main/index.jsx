import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "./Main.scss";
MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">
          <Button color="primary">Add new photo</Button>
        </Link>
      </Container>
    </div>
  );
}

export default MainPage;
