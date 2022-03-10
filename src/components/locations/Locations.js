import React, { useEffect, useState } from "react"
import { getLocations } from "../ApiManager"

export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            getLocations()
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )

    return (
        <>
            <h2>Kandy Korner Locations</h2>
            <div>
                {
                    locations.map(
                        (location) => {
                            return <div key={`location--${location.id}`}>
                                <p>{location.streetName}</p>
                                <p>{location.city}, {location.state} {location.zipCode}</p><br></br>
                            </div>
                        })
                }
            </div>
        </>

    )
}

