import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      {!image && <p>No image provided</p>}
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default ImageModal;
