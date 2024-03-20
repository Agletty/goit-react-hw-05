const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;
