import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { getProducts } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products)

  return (
    <div>
      <h1>Home</h1>
      {
        products.map(productsItem => (
          <Card onClick={() => navigate(`/products/${productsItem.id}`)}>
            {productsItem.title}
            <img src={productsItem.productImgs[0]}/>
          </Card>
        ))
      }
    </div>
  );
};

export default Home;
