import React,{useState,useEffect} from "react";
import HomeCarousel from "../../elements/HomeCarousel";
import Products from "../../elements/Products";
import ProductsBox from "../../elements/ProductsBox";
import Banner from "../../elements/Banner";
import GrassBanner from "../../elements/GrassBanner";
import BlogPosts from "../../elements/BlogPosts";

import {
  ProductsInfo,
  ProductsBoxInfos,
  ProductsBoxCategory,
  ProductsBoxUtils,
  ProductsBoxInfos2,
  BlogPostInfos
} from "../../utils";

export default function Home({setCart}) {
  // const [cartProducts,setCartProducts]=useState([])
 
  // useEffect(()=>{
    
  // },[cartProducts])

  return (
    <>
      <HomeCarousel />
      <Products md={2} add={setCart} infos={ProductsInfo} />
      <ProductsBox
        infos={ProductsBoxInfos}
        category={ProductsBoxCategory}
        products={ProductsBoxUtils}
      />
      <Banner />
      <ProductsBox
        infos={ProductsBoxInfos2}
        category={ProductsBoxCategory}
        products={ProductsBoxUtils}
      />
      <GrassBanner/>
      <BlogPosts infos={BlogPostInfos}/>
    </>
  );
}
