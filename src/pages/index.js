import React, { useState, useEffect } from "react"

import Users from "../data"

function IndexPage() {
  const [users, setUsers] = useState(Users)
  const [categories, setCategories] = useState([])

  const locationFilter = (e) => {
    e.preventDefault();
  
    const locationUsers = Users.filter(user => user.location === e.target.textContent);
    console.log(locationUsers);
  
    setUsers(locationUsers);
  }

  useEffect(() => {
    const locations = []

    Users.map(element => {
      return locations.push(element.location)
    })

    const uniqueLocations = new Set(locations)
    const locationsArray = Array.from(uniqueLocations)
    setCategories(locationsArray)

  }, [])

  return (
    <>
      {categories.map((category) => {
        return <button key={category} onClick={locationFilter}>{category}</button>
      })}
      <ul>
        {users.map(user => {
          const { name, age, location } = user
          return (
            <li key={name}>
              {name}, {age}, {location}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default IndexPage
