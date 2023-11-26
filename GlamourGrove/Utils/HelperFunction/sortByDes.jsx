import React from "react";

const sortByDes = (products) => {
  if (!products) {
    return [];
  } else {
    const product = [...products].sort((a, b) => {
      return +b.price - +a.price;
    });
    return product;
  }
};

export default sortByDes;
