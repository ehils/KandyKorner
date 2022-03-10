import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getCustomerPurchases, productFetch } from "../ApiManager";

export const MyOrders = () => {

    const [purchases, setPurchase] = useState([])
    const [products, setProducts] = useState([])
    const [customer, currentCustomer] = useState({})
    const { customerId } = useParams()

    useEffect(
        () => {
            getCustomerPurchases(customerId)
                .then((data) => {
                    setPurchase(data)
                    currentCustomer(data[0].customer)
                })


        },
        [] // Above function runs when the value of purchaseId changes
    )
    // Also, works as the same customer, currentCustomer  useState above   
    // useEffect(
    //     () => {
    //         fetch(`http://localhost:8088/customers/id=${customerId}`)
    //         .then(res => res.json())
    //             .then((data) => { 
    //                 currentCustomer(data)
    //             })
    //     }
    // )
    useEffect(() => {
        productFetch()
            .then((data) => {
                setProducts(data)

            })
    },
        []
    )
    // define a function createLineItem()that iterates through purchases
    const createLineItem = () => {
        // iterate through 

        const customerProducts = {}

        const customerProductsArray = []

        const custPurchases = purchases.filter(
            purch => {
                if (purch.customerId === customer.id) {
                    return true
                }
                else return false



            });
        custPurchases.forEach(purchase => {
            for (const product of products) {
                if (product.id === purchase.productId) {
                    if (product.name in customerProducts){
                        // 
                        customerProducts[product.name].amount = customerProducts[product.name].amount + 1
                    } else {
                        customerProducts[product.name] = {
                            amount: 1,
                            price: product.price,
                            productId: product.id,
                            name: product.name
                        }
                    }
                }
            }
        return customerProducts
        });
        
        // for in 
        // for (const key in object) {
        for (const custProd in customerProducts) {
                // push custPRod obj into array of customerPRoducts
                // Q: 
            customerProductsArray.push(customerProducts[custProd])
        }
        return customerProductsArray
           
        //     }
        // }
        // return array
        // can map, sort, etc.
        
        
    }
    // {
        // taffy:{amount: 2, price
    // }
    
    const custProd = createLineItem()
    console.log(custProd)
    // for each customer, check if they have have current product fk as proeprty,
    // if not, add key.value:
    // {
    //   "id": 1,
    //   "name": "Roy Donk",
    //   "email": "badonk69@hotmail.com",
    //   "address": "066 Huel Junctions",
    //   "product.name":{productId: 1, price: 4.20, amount: 0",
    //   "{productId: 2, price: 4.20}: 0",
    //   "{productId: 3, price: 4.20}: 0",
    //   "{productId: 4, price: 4.20}: 0",
    //   "{productId: 5, price: 4.20}: 0",
    //   "{productId: 6, price: 4.20}: 0"
    // }
    // if the property exists, increment by one
    // if it doesnt, add the property with a value of one



    return (
        <>
            <h2>Kandy Kustomer:
                {customer.name}
            </h2>
            {
                custProd.map(custProd => {
                    const totalPrice = custProd.price * custProd.amount
                    return <div className="customer__custProd" key={`custProd__${custProd.productId}`}>
                        <div>
                            {custProd.name}: {custProd.amount}<br></br>
                            Price per Unit: {custProd.price}<br></br>
                            Total Price: {totalPrice}
                        </div>
                    </div>
                }

                )
            }

        </>
    )
}
