import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAPI } from "../API";
import SingleProduct from "./SingleProduct";
import { setProducts } from "../redux/actionTypes";

const CatalogProduct = ({}) => {
  const productList = useSelector((state) => state.ProductsReducer.productList);
  const dispatch = useDispatch();


  useEffect(() => {
    productsAPI().then((result) => {
      dispatch(setProducts(result));
    });
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 50,
        marginTop: 50
      }}
    >
      {productList &&
        productList.map((item) => (
          <SingleProduct
            count={item.count}
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            item={item}
          />
        ))}
    </div>
  );
};
export default CatalogProduct;
