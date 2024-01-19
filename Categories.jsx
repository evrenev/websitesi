import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Categories({user}) {
  const [categories, setCategories]= useState([])
  useEffect (()=> {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(res=> setCategories(res))
  },[])
  return (
    <>
      <h1> KATEGORİLER </h1>
      <div className="list-group">
        {
          categories.map((category,index) =>
          <Link
          key = {index}
          className="list-group-item list-group-item-action"
          to = {"/products/category/$ {category}"}>
            {category.toUpperCase()}
            </Link>
            )
        
        }
        

        <a href="#" className="list-group-item list-group-item-action">
         
        </a>
        
      </div>
    </>
  );
}

export default Categories;
