import React from "react";

const toFind = (searchVal, product, setProduct) => {
  if (searchVal === "") return product;
  const filterProduct = product.filter((item) => {
    return (
      item.category.toLowerCase() === searchVal.toLowerCase() ||
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
  });
  return filterProduct;
};

export default toFind;
