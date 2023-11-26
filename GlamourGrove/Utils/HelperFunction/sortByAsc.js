import React from 'react'
import { useProduct } from '../CustomHooks/useProduct'
const sortByAsc = (products) => {
 if(!products){
    return [];
 }
 else{
   const product = [...products].sort((a,b)=>{
     return (+a.price) - (+b.price)
    })
    return product;

 }
}

export default sortByAsc
