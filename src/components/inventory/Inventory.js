import React, { useState, useEffect} from "react"
import { productTypeFetch } from "../ApiManager"
import { InventoryList } from "./InventoryList"
import { InventorySearch } from "./InventorySearch"


// Inventory component Serves as ancestor 
export const Inventory = () => {
const [searchField, setSearchField] = useState("")
// const [products, setProducts] = useState([])
// const listRender = () => {
//     productTypeFetch()
//         .then((data) =>
//             setProducts(data)
//         )
// }


// useEffect(() =>{
//     listRender()
// },
// []
// )




return (
    <>
    <InventorySearch setSearchField={setSearchField} searchField={searchField}/>
        <InventoryList searchField={searchField} />
        </>
)
}

// To two Children
// (haosifaois()),[]
// productlist
// Add state variable to track customer search terms
// State variable to initialize products array
