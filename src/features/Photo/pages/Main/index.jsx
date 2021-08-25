import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import "./Main.scss";
MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const history = useHistory();

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("Remove: ", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos" backgroundUrl={Images.MAIN_BG} />
      <Container>
        <Row className="text-center">
          <Col></Col>
          <Col>
            <a
              href="https://github.com/vanlegithub/redux-photo-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn btn-dark">Github Project</Button>
            </a>
          </Col>
          <Col>
            <Link to="/photos/add">
              <Button className="btn btn-secondary">Add new photo</Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
