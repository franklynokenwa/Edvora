import React,{useState, useEffect} from 'react'
import Home from './components/Home';
import GlobalStyles from './styles/Global.styled';
import axios from 'axios';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import ApiDataContext from './components/DataContext'
import UpcomingRides from './components/UpcomingRides';
import PastRides from './components/PastRides';
import NearestRides from './components/NearestRides';


function App() {
  const [rideData, setRideData] = useState([])

    useEffect(() => {
      const getData = async () =>{
        await axios.get("https://assessment.api.vweb.app/rides").then(response => {
        console.log(response.data);
        console.log('success');
        setRideData(response.data)
      })
    }
      getData();

    }, []);     
    

  return (
      <ApiDataContext.Provider value={rideData}>
        <main className="App">
          <GlobalStyles/>
          <Routes>
            <Route index path="/" element={<Home/>}></Route>
            <Route path="/nearest-rides" element={<NearestRides/>}></Route>
            <Route path="/upcoming-rides" element={<UpcomingRides/>}></Route>
            <Route path="/past-rides" element={<PastRides/>}></Route>
          </Routes>
        </main>
      </ApiDataContext.Provider>
    
  );
}

export default App;
