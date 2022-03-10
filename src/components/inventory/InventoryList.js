// import React
import React, { useEffect, useState } from "react";
import { productFetch } from "../ApiManager";

// display the filtered products list
export const InventoryList = ({ searchField }) => {

    const [products, setProducts] = useState([]);

    const [foundProducts, setFoundProducts] = useState([]);

    const getProducts = () => {
        productFetch()
            .then((data) =>
                setProducts(data)
            )
    }
    
    // initialize product State
    useEffect(
        () => {
            getProducts()
        },
        []
        )
        // re-render list based on searchfield criteria
        useEffect(
            () => {
                renderSearch(searchField)
            },
            [searchField]
            )
            
            const renderSearch = (searchField) => {
                const foundProductsArray = products.filter(product => {
                    debugger
                    if (searchField === "") {
                        return false
                    } else if (product.name.toLowerCase().includes(searchField.toLowerCase())) {
                        return true
                    } else return false
                    
                }
                
                )
                setFoundProducts(foundProductsArray)
            }
            return (
                <>
                <div>
                    {
                        foundProducts.map(product => {
                            return <div className="search" key={product.id}>
                                <p>{product.name}</p>
                            </div>
                        })
                    }
                </div>
            </>
        )
        
}


/* // define function that iterates through the filtered products
// and return the jsx which will displayed upon search
// jsx = the jsx in product list
// { */
/* // iterates through products and returns HTML to display product selections on the DOM */

// Home page
// Recipes
// Recipe detail
// my recipes
// form for createing recipes
// login
// register

// Stretch:
// search
// ingredients 
// mushroom tags
// user page

// administraive
// course:apps, main, soups


// wireframe => ERD => google doc
// send google doc with anyone able to edit