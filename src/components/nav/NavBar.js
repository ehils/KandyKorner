import React from "react";
import { useParams, Link } from "react-router-dom";
import "./NavBar.css"



export const NavBar = () => {
    const {customerId} = useParams()
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/inventory">Inventory Search</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to={`/purchases/${localStorage.getItem("kandy_customer")}`}>My Orders</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("kandy_customer")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}
