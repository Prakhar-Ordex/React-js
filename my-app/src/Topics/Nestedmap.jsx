import React from 'react'

const Nestedmap = () => {
    const countrieswithcities = [
        { country: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
        { country: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore'] },
        { country: 'UK', cities: ['London', 'Manchester', 'Birmingham'] },
        { country: 'Canada', cities: ['Ottawa', 'Toronto', 'Vancouver'] },
        { country: 'Australia', cities: ['Sydney', 'Melbourne', 'Brisbane'] },
        { country: 'France', cities: ['Paris', 'Lille', 'Marseille'] },
        { country: 'Germany', cities: ['Berlin', 'Munich', 'Hamburg'] }
    ]
  return (
    <div>
          <h4>Nested map funtion</h4>

          
          <ul>
              {
                  countrieswithcities.map(country => (
                    <li key={country.country}>
                        <strong>{country.country}</strong>
                        <ul>
                            {country.cities.map(city => (
                                <li key={city}>{city}</li>
                            ))}
                        </ul>
                    </li>
                  ))

                  // countrieswithcities.forEach(country => {
                  //     console.log(country.country)
                  //     country.cities.forEach(city => console.log(city))
                  // })
              }
          </ul>
    </div>
  )
}

export default Nestedmap
