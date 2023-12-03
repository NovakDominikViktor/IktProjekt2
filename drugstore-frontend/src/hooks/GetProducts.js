import React, { useState, useEffect } from "react";

import Card from "../components/Card";

export default function GetProducts(props){
    const url = "https://localhost:7227/Product";

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.result);
            setProduct(data.result);
          })
          .catch((error) => console.error('Error fetching products:', error));
      }, [props.count]);
      
      
    
    const productsElements = product.map(productobj => {
        return(
            <Card
                key={productobj.id}
                {...productobj}
                updateCardState={props.stateChange}
            />
        )
    })
    return(
        <>
            {productsElements}
        </>
    )
}

