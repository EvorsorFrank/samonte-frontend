import { useState, useEffect, createContext } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'

interface locationDataProps {
  latitude: number;
  longitude: number;
}

const locationData = createContext<locationDataProps>({
  latitude: 0,
  longitude: 0
});

function App() {
  const [acceptedPolicy, setAcceptedPolicy] = useState<boolean>(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState<boolean>(true);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const fetchUserLocation = async () => {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    } catch (error) {
      console.error("Error fetching user location:", error);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);


  return (
    <>
      <locationData.Provider value={userLocation || { latitude: 0, longitude: 0 }}>
        <div className='text-black h-screen overflow-y-auto border-black bg-gradient-to-r from-green-500 to-lime-400 -z-50'>
            <Header />
          {acceptedPolicy &&
            <>
              <div className='flex flex-wrap min-w-screen min-h-fit justify-evenly mt-3 '>
                <Home />
              </div>
            </>
          }
          {!acceptedPolicy &&
            <PrivacyPolicy isVisible={showPrivacyPolicy} onClose={() => { setShowPrivacyPolicy(false); setAcceptedPolicy(true) }} />
          }
        </div>
      </locationData.Provider>
    </>
  )
}

export default App
export { locationData }
