import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images && images.length > 0 ? (
        images.map((image, index) => (
          <li key={index}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))
      ) : (
        <p>No images available</p>
      )}
    </ul>
  );
};

export default ImageGallery;
