import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getLocations, saveEmployeeListPost } from "../ApiManager";


// define function to for employee form
export const EmployeeForm = () => {
    // create useState with employee variable and upDate function parameters
    const [employee, updateEmployee] = useState({
        // the useState contains an object

        name: "",
        locationId: 1,
        manager: false,
        fullTime: false,
        hourlyRate: "",

    })

    const [locations, setLocations] = useState([])

    // initializes locations
    useEffect(
        () => {
            getLocations()
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )

    const history = useHistory()

    // Event sends employee info to API and saves to database
    const saveEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate,
        }

        saveEmployeeListPost(newEmployee)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Employee Application Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__name">Name:</label>
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...employee }
                                copy.name = e.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name Here"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__location">Location:</label>
                    <select value={employee.locationId.value}
                        defaultValue={"0"}
                        onChange={(e) => {
                            const copy = { ...employee }
                            copy.locationId = parseInt(e.target.value)
                            updateEmployee(copy)
                        }}>
                        <option value="0">Select a location..</option>
                        {locations.map(location => {
                            return <option value={location.id}>
                                {location.streetName}{location.city}, {location.state} {location.zipCode}
                            </option>
                        })
                        }

                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__managerialExperience">Manager:</label>
                    <input type="checkbox"
                        onChange={(e) => {
                            const copy = { ...employee }
                            copy.manager = e.target.checked
                            updateEmployee(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__fullTimeStatus">Full-Time:</label>
                    <input type="checkbox"
                        onChange={(e) => {
                            const copy = { ...employee }
                            copy.fullTime = e.target.checked
                            updateEmployee(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employee__hourlyRate">Hourly Rate:</label>
                    <input
                        onChange={
                            (e) => {
                                const copy = { ...employee }
                                copy.hourlyRate = e.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Amount Here"
                    />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Submit Application
            </button>
        </form>
    )
}