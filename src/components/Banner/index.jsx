import PropTypes from "prop-types";
import React from "react";
import "./Banner.scss";

Banner.propTypes = {
  title: PropTypes.string,
  backgroundUrl: PropTypes.string,
};

Banner.defaultProps = {
  title: "",
  backgroundUrl: "",
};

function Banner(props) {
  const { title, backgroundUrl } = props;

  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};

  return (
    <section className="banner" style={bannerStyle}>
      <h2 className="banner__title">{title}</h2>
    </section>
  );
}

export default Banner;
