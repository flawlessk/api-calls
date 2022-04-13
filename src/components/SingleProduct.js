const SingleProduct = ({ image, title, id, price, description }) => {
  return (
    <div
      key={id}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 20px"
      }}
    >
      <div>
        <img style={{ height: 170, width: 200 }} src={image} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>COST {price} $ </span>
      </div>
    </div>
  );
};
export default SingleProduct;
