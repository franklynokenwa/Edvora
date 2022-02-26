import React from 'react'
import StyledRide from '../styles/Rides.styled'

const Rides = (props) => {
  const {rides} = props;

  return (
    <div>
        {rides.map((item) =>{
          const {id, origin_station_code, station_path,map_url, date} = item
          console.log(rides.length);
          return(
            <StyledRide key={id}>
              <section>
                <img src={map_url} alt='map' />
                <div>
                  <p>Ride id: <span>{id}</span></p>
                  <p>Origin Station: <span>{origin_station_code}</span> </p>
                  <p>station_path : {station_path.map((stationPaths)=>{
                    return <span>{`${stationPaths},`}</span>
                  })} </p>
                  <p>Date : <span>{date}</span> </p>
                  <p>Distance : <span>0222222222</span> </p>
                </div>
              </section>
              
              <aside>
                <p>City Name</p>
                <p>State Name</p>
              </aside>
            </StyledRide>
          )
        })}            
    </div>
  )
}

export default Rides