

// CustomerList.js line 7
export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}
// EmployeeForm line 25
export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(res => res.json())
}
// Login line 13
export const getEmails = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
        .then(res => res.json())
}
// Register Line 13
export const getSpecificEmail = (customer) => {
    return fetch(`http://localhost:8088/customers?email=${customer.email}`)
        .then(res => res.json())
}
//  REgister Line 22
export const postCustomer = (customer) => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
        .then(res => res.json())
}
// My Orders Line 12
export const getCustomerPurchases = (customerId) => {
    return fetch(`http://localhost:8088/purchases?customerId=${customerId}&_expand=customer&_expand=product`)
        .then(res => res.json())
}
// Employee List Line 16
export const updateEmployeeListFetch = () => {
    return fetch("http://localhost:8088/employees?_expand=location")
        .then(res => res.json())
}
// MyOrders Line 35
export const productFetch = () => {
    return fetch("http://localhost:8088/products")
        .then(res => res.json())
}

// EmployeeForm line 46
export const saveEmployeeListPost = (newEmployee) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
}
// EmployeeList 23
export const fireEmployeeDelete = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
}
// ProductList Line 21
export const productTypeFetch = () => {
    return fetch("http://localhost:8088/products?_expand=productType&_sort=productType")
    .then(res => res.json())
}

export const postPurchase = (event, history) => {
    // prevents event from refreshing the page
    event.preventDefault()

    
    
    // create new purchase objectt
    const newPurchase = {
        customerId: parseInt(localStorage.getItem("kandy_customer")),
        productId: parseInt(event.target.id)
    } 

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPurchase)
    }

    return fetch("http://localhost:8088/purchases", fetchOption)

        
}
