const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <>
      <button
        onClick={onLoadMore}
        style={{ margin: "20px auto", display: "block" }}
      >
        Load more...
      </button>
    </>
  );
};

export default LoadMoreBtn;
