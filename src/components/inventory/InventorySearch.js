// import React, useState
import React, { useState, useEffect } from "react";
// import inventoryList
export const InventorySearch = ({ searchField, setSearchField}) => {

    
    
    const searchChange = (e) => {
        
        // setting searchField variable to evnt target value
        console.log(e.target.value)
        if (e.charCode === 13){
        setSearchField(e.target.value)
        }
        
    }
    return (
        <section className="product__search">
            <h2>Search Our Kandy</h2>
            <div className="product__searchInput">
                <input className="input" type="search" placeholder="Search Kandy Here"
                // the input
                onKeyPress={searchChange} 
                />
            </div>
        </section>
    )
}
// InventorySearch has
    // Prompt: "enter product name"
    // Input field: cust types search terms

// set state variable searchField and function to invoke setSearchField to useState string

// filter products array to return objects
// based on product name in searchField


// create a change event that uses the setSEarchField function to set searchField to change event target

// define a function that imports inventoryList and passes filteredProducts array as attribute