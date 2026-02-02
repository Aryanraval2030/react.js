import { useEffect, useState } from 'react'

import './App.css'

function App() {


  const [city, setCity] = useState("delhi")
  const [wheatherApp, setWheather] = useState(null)

  const getDate = new Date()
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const month = months[getDate.getMonth()]
  const day = getDate.getDate()
  const year = getDate.getFullYear()
  const fullDate = `${month}${day}, ${year}`


  const apiKey = ""

  const fetchWheatherData = async () => {
    try {

      const respone = await fetch(`https://wttr.in/${city}?format=j1`)

      const data = await respone.json()
      console.log(data)
      setWheather(data)

    } catch (error) {
      console.log("error is here..")
    }
  }


  const handleSearch = () => {
    if (city.trim() === "") return
    fetchWheatherData()
  }



  const handleInput = (event) => {
    setCity(event.target.value)
  }

  return (
    <>
      <div className="container">
        <h1 className="container_date">{fullDate}</h1>

        <div className="container_date">
          <h2 className="container_city">
            {city}
          </h2>
          <img src="https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695.jpg" className="container_img" alt="" height="150px" />
          <h1 className="container_degree">
            {Number(wheatherApp?.current_condition?.[0]?.temp_C)}°C

          </h1>
          <h1 className="country_per">
            {wheatherApp?.current_condition?.[0]?.weatherDesc?.[0]?.value}

          </h1>
          <div className="form" >
            <input type="text" className="input" id="entercity" placeholder="Enter your city" onChange={handleInput} />
            <button type="button" onClick={fetchWheatherData}>get</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App