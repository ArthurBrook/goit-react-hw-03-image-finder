import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className="ImageGalleryItem" onClick={() => onClick(image.largeImageURL)}>
    <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
