import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fireEmployeeDelete, updateEmployeeListFetch } from "../ApiManager";


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const history = useHistory()

    useEffect(
        () => updateEmployeeList(),
        []

    )

    const updateEmployeeList = () => {
        updateEmployeeListFetch()
                .then((data) => {
                    setEmployees(data)
                })
    }

    const fireEmployee = (id) => {
        fireEmployeeDelete(id)
        .then(
            () => updateEmployeeList()
        )
    }
    


    return (
        <>
            <div>
                <button onClick={() => history.push('/employees/hire')}>Add Employee</button>
            </div>
            <h2>Current Employees</h2>
            {
                employees.map(employee => {
                    return <div key={`employee__${employee.id}`}>
                        <p className={`employee`}>
                            {employee.name}<br></br>
                            {employee.location.streetName}<br></br>
                            {employee.location.city}, {employee.location.state} {employee.location.zipCode}
                        </p>
                        <button className="btn btn-fire" onClick={() => {
                            fireEmployee(employee.id)
                        }}>
                            Fire Employee
                        </button>
                    </div>
                }
                )}
        </>
    )
}