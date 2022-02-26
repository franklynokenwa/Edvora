import React, {useContext} from 'react'
import StyledRide from '../styles/Rides.styled'
import mapImage from '../images/map.png'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import Home from './Home'
import ApiDataContext from './DataContext'
import { DateTime } from "luxon";


const Rides = (props) => {
  const {rides} = props;

  // const rideData = useContext(ApiDataContext)
  // const currentDate = Date.now();
  // console.log(currentDate);
  // console.log(typeof(currentDate));

  // const formattedCurrentDate = DateTime.now().toLocaleString();
  // console.log(formattedCurrentDate);

  // const upcomingRides = rideData.filter((item) => {
    // console.log(item.date > formattedCurrentDate);
    // const s = item.date.toString();
    // console.log(typeof(s));
    // const f = item.date.includes(item.date > formattedCurrentDate)
  //   let rideDateFromApi = item.date;
  //   let CurrentDate = new Date();
  //   rideDateFromApi = new Date(rideDateFromApi);

  //   return rideDateFromApi > CurrentDate;
  // })
  // console.log(upcomingRides);
  
  // console.log(GivenDate)
  // console.log(CurrentDate);

  // if(GivenDate > CurrentDate){
  //     console.log('Given date is greater than the current date.');
  // }else{
  //     console.log('Given date is not greater than the current date.');
  // }

  
  // console.log(upcomingRides);

  return (
    <div>
            {rides.map((item) =>{
              const {id, origin_station_code, station_path, date} = item
              return(
                <StyledRide>
                  <section>
                    <img src={mapImage} alt='map' />
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