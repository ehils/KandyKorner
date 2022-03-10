import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postPurchase, productTypeFetch } from "../ApiManager";


export const ProductList = () => {
    const [products, setProductList] = useState([])
    // define a purchase state variable and savePurchase function
    //  equal to an intial state object
    // object needs: productId, customerId
    // set variable history to useHistory
    // 
    const history = useHistory()

    // Initializes the initial product state
    useEffect(
        () => {
            productTypeFetch()
                .then((data) => {
                    setProductList(data)
                })
        },
        []
    )


    // define a function that stores a new
    // Purchase Object
    //   New object is sent to API via POST
    const postCurrentPurchase = (event) => { postPurchase(event)
        .then(() => {
            // routes us quickly after action is completed
            history.push(`/purchases/${parseInt(localStorage.getItem("kandy_customer"))}`)
        })
    }


    return (
        <>
            <h2>Our Kandy</h2>
            {
                // iterates through products and returns HTML to display product selections on the DOM
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`} value={product.id}
                        >
                            <p>{product.name}</p>
                            <p>Description: {product.productType.type}</p>
                            <p>ONLY ${product.price}!</p>
                            {/* add purchase button
                            OnClick, calls function that adds purchased product 
                            to purchase array */}
                            <button id={product.id} onClick={postCurrentPurchase}>Purchase</button>

                        </div>
                    }
                )
            }
        </>
    )

}