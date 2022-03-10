import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../ApiManager";
export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")
    const [purchases, getPurchases] = useState([])
    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )
    // get customer purchase state
    useEffect(
        () => {
            fetch("http://localhost:8088/purchases")
                .then(res => res.json())
                .then((data) => {
                    getPurchases(data)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }

        },
        [customers]
    )
    const customerList = () => {
        // iterate through customers
       
        return customers.map(
            (customerObject) => {
            // filter all purchases for each customer based on matching cust pk to pruch fk
            const customerPurchaseArray = purchases.filter(purch => {
                return purch.customerId === customerObject.id
            })
            //  use the length to get the total number of purchase  
            // set the length of the purchase array = to numberOfpurchases property on each customer
            customerObject.numberOfPurchases = customerPurchaseArray.length
            return customerObject
        }
        )

    }
    // const getCustomers = () => {
    //     return customers.map(cust => ({...cust}))
    // }

    // define function to sort based on numberOfPurchases property
    const compare_numberOfPurchases = (a, b) =>{
        // a should come before b in the sorted order
        // if(b.numberOfPurchases < a.numberOfPurchases){
        //     return -1;
        //     // a should come after b in the sorted order
        // }else if(b.numberOfPurchases > a.numberOfPurchases){
        //     return 1;
        //     // a and b are the same
        // }else{
        //     return 0;
        // }
        return b.numberOfPurchases - a.numberOfPurchases
    }
    const newCustomersArr = customerList()
    const sortedCustomers = newCustomersArr.sort(compare_numberOfPurchases)
    console.log(sortedCustomers)
    // debugger
    // display customer product amount
    // sort and display customers array by that property

    return (
        <>
            <h2>Customer List</h2>
            <div>{totalCustomerMessage}</div>
            {   
                // customers.map(customerObject => {
                //     // filter all purchases for each customer based on matching cust pk to pruch fk
                //     const customerPurchaseArray = purchases.filter(purch => {
                //         return purch.customerId === customerObject.id
                //     })
                //     //  use the length to get the total number of purchase  
                    
                    
                //     return <p key={`customer--${customerObject.id}`}>{customerObject.name} {customerPurchaseArray.length}</p>
                // }
                // )
                sortedCustomers.slice(0, 3).map(customerObject => {
                   
                    // customerPurchaseArray.length = customerObject.numberOfPurchases
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name} {customerObject.numberOfPurchases}</p>
                }
                )
                
            }
            {/* <p key={`customer--${customerObject.id}`}>{customerObject.name} {customerObject.numberOfPurchases}</p> */}
        </>
    )
}