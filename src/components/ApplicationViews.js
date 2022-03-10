import React from "react";
import { Route } from "react-router-dom";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeList } from "./employees/EmployeeList";
import { Locations } from "./locations/Locations";
import { ProductList } from "./products/ProductList";
import { CustomerList } from "./customers/CustomerList";
import { MyOrders } from "./customers/MyOrders";
import { Inventory } from "./inventory/Inventory";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/locations">
                <Locations />
            </Route>        
            <Route exact path="/products">
                <ProductList />
            </Route>        
            <Route exact path="/inventory">
                <Inventory />
            </Route>        
            <Route exact path="/employees">
                <EmployeeList />
            </Route>        
            <Route exact path="/customers">
                <CustomerList />
            </Route>        
            <Route path="/employees/hire">
                <EmployeeForm />
            </Route>        
            {/* within route parameter, */}
            <Route exact path="/purchases/:customerId(\d+)">
                <MyOrders />
            </Route>        
        </>
    )
}