'use client'
import { useContext } from 'react'
import { useState, useEffect } from 'react';
import endpointAPI from '../endpointAPI'
import { useMap, MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import 'leaflet.heat';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
import { motion } from 'framer-motion'

import invisibleIcon from '../assets/invisiblePNG.png'
import locationIcon from '../assets/location-pin.png'
import ClickedClusterModal from '../design/ClickedClusterModal';
import { locationData } from '../App';
import FailedMapLoad from '../design/FailedMapLoad';

// Define a type for the response data
type HeatmapResponseData = {
  plant_disease: string;
  latitude: number;
  longitude: number;
}[];

type ClusterDiseaseData = [number, number, string][];

// Modify the generateHeatmapData function to return data in the format expected by HeatmapData
function generateHeatmapData(data: HeatmapResponseData): [number, number][] {
  // Use a dictionary to track the count of cases for each point
  const casesCount: Record<string, number> = {};

  data.forEach((item) => {
    const key = `${item.latitude}_${item.longitude}`;
    casesCount[key] = (casesCount[key] || 0) + 1;
  });

  // Convert the dictionary keys to an array of [latitude, longitude] for each point
  return Object.keys(casesCount).map((key) => {
    const [latitude, longitude] = key.split('_').map(parseFloat);
    return [latitude, longitude];
  });
}

function generateClusterDiseaseData(data: HeatmapResponseData): ClusterDiseaseData {
  return data.map(item => [item.latitude, item.longitude, item.plant_disease]);
}

// Custom HeatMapLayer component
function HeatMapLayer({ points, blur, maxZoom, max, gradient }: any) {
  const map = useMap();

  useEffect(() => {
    const heatLayer = L.heatLayer(points, { blur, maxZoom, max, gradient }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points, blur, maxZoom, max, gradient]);

  return null;
}


const Maps = () => {
  const baseUrl = endpointAPI();
  const location = useContext(locationData)
  const latitudeUser = location.latitude
  const longitudeUser = location.longitude
  const [heatmapData, setHeatmapData] = useState<Array<[number, number]>>([]);
  const [clusterDiseaseData, setClusterDiseaseData] = useState<Array<[number, number, string]>>([]);
  const [clickedClusterData, setClickedClusterData] = useState<[string, number][]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCrop, setSelectedCrop] = useState<string>('');
  const [locationZero, setLocationZero] = useState<boolean>(false);
  const [failedMapFetch, setFailedMapFetch] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCrop) {
      const fetchData = async () => {
        try {
          const formData = new FormData();
          formData.append('crop', selectedCrop);

          const response = await fetch(`${baseUrl}/get_map_data`, {
            method: 'POST',
            body: formData
          });

          if (response.ok) {
            const data = await response.json();
            setHeatmapData(generateHeatmapData(data));
            setClusterDiseaseData(generateClusterDiseaseData(data));
          }
        } catch (error) {
          console.error('Error fetching heatmap data:', error);
          setFailedMapFetch(true)
        }
      };

      fetchData();
    }
  }, [selectedCrop]);
  
  useEffect(() => {
    setTimeout(
      function () {
        setFailedMapFetch(false)
      }
      , 2500)
  }, [failedMapFetch])


  if (latitudeUser === 0 || longitudeUser === 0) {
    return (
      <div className='text-center mt-20'>
        <div className="text-xl">
          Turn on Location First :(
        </div>
        <a className="z-50 text-sm font-bold text-red-600" href="https://youtu.be/vq9riE8OChc?si=UkttT56-o_BxS6bh&t=2m01s" target="_blank">
          Here's how to turn on location (click here)
        </a>
      </div>
    );
  }

  const handleClusterClick = (event: any) => {
    const cluster = event.layer;
    const markers = cluster.getAllChildMarkers();

    // Count the occurrences of each disease in the cluster
    const diseaseCounts: Record<string, number> = {};

    markers.forEach((marker: any) => {
      const dataIndex = clusterDiseaseData.findIndex(
        (dataPoint) => dataPoint[0] === marker.getLatLng().lat && dataPoint[1] === marker.getLatLng().lng
      );
      const disease = clusterDiseaseData[dataIndex][2];

      if (diseaseCounts[disease]) {
        diseaseCounts[disease] += 1;
      } else {
        diseaseCounts[disease] = 1;
      }
    });

    // Convert the counts to an array of [disease, count] pairs
    const diseaseCountArray: [string, number][] = Object.entries(diseaseCounts);

    // Update state with the array
    setClickedClusterData(diseaseCountArray);
    setIsModalOpen(true);
  };

  const createClusterCustomIcon = (cluster: any) => {
    const childCount = cluster.getChildCount();

    let className = 'custom-cluster-icon';

    if (childCount < 10) {
      className += ' custom-cluster-small';
    } else if (childCount < 100) {
      className += ' custom-cluster-medium';
    } else {
      className += ' custom-cluster-large';
    }

    // Customize the icon here
    const icon = L.divIcon({
      html: `<div><span style="color: rgba(255, 255, 255, 0);">${childCount}</span></div>`,
      className: className,
      iconSize: L.point(40, 40, true),
    });

    return icon;
  };

  const handleCropHeatmap = (type: string) => {
    setSelectedCrop(type);
  };

  console.log('clusterDiseaseData:', clusterDiseaseData);




  return (

    <div className='flex text-center justify-center items-center content-center'>
      <motion.div animate={{ y: failedMapFetch ? 0 : 0 }}>
        <FailedMapLoad isVisible={failedMapFetch} onClose={() => setFailedMapFetch(false)} />
      </motion.div>
      <div className='h-full  z-10'>
        <div className='justify-center items-center content-center flex text-center -z-50'>

          <MapContainer center={[latitudeUser, longitudeUser]} zoom={15} maxZoom={15} minZoom={15} style={{ position: 'relative', width: '100%', height: '450px' }} >
            {heatmapData.length > 0 && (
              <HeatMapLayer
                points={heatmapData}
                blur={25}
                maxZoom={10}
                max={6.0}
                gradient={{ 0.5: 'rgba(0, 255, 255, 1)', 0.6: 'rgba(0, 0, 255, 1)', 0.7: 'rgba(0, 255, 0, 1)', 0.8: 'rgba(255, 255, 0, 1)', 0.9: 'rgba(255, 0, 0, 1)' }}
              />
            )}
            <TileLayer
              url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
              attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors'
              maxZoom={18}
              id="mapbox/satellite-streets-v12" // Mapbox style ID for satellite view
              tileSize={512}
              zoomOffset={-1}
              accessToken="pk.eyJ1IjoiZXZvcnNvcmRldiIsImEiOiJjbG5idHYxbHMwMGpjMmxtcmdjeXk5MGZiIn0.M1o1hTHMFOYTGTB0lwKLKQ"
            />
            <Tooltip direction="top" offset={[0, -30]} opacity={1} permanent>
              <span>You are here</span>
            </Tooltip>
            <Marker position={[latitudeUser, longitudeUser]}>
              <img src={locationIcon} />
              <Popup>
                You are here
              </Popup>
            </Marker>
            <MarkerClusterGroup
              spiderfyOnMaxZoom={false}
              eventHandlers={{
                clusterclick: (event: any) => handleClusterClick(event),
              }}
              iconCreateFunction={createClusterCustomIcon}
            >
              {clusterDiseaseData.map((dataPoint, index) => {
                // Check if latitude and longitude are valid numbers
                if (typeof dataPoint[0] === 'number' && typeof dataPoint[1] === 'number') {
                  return (
                    <Marker
                      key={index}
                      position={[dataPoint[0], dataPoint[1]]}
                      icon={L.icon({ iconUrl: invisibleIcon, iconSize: [30, 30] })}
                    >
                      <Popup>{`${dataPoint[2]}: 1`}</Popup>
                    </Marker>
                  );
                } else {
                  // Handle invalid data points
                  console.error(`Invalid data point at index ${index}: ${dataPoint}`);
                  return null;
                }
              })}
            </MarkerClusterGroup>
          </MapContainer>
        </div>


        <div className='text-lg font-bold'> Plant Disease Density </div>
        <div className='flex flex-col justify-center items-center h-full'>
          <div className='flex h-[20px] flex-row justify-between w-full' style={{
            background: 'linear-gradient(to right, cyan, blue , lime, yellow, red)',
          }}>
            <div style={{ marginLeft: 10 }}><b>Low</b></div>
            <div><b>Medium</b></div>
            <div style={{ marginRight: 10 }}><b>High</b></div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center pt-[1%]'>
          <div className=' text-xs w-full text-center m-auto'>
            <b>You can display the density of plant disease near your location by choosing one of the crop choices below. You can also tap/click each cluster to see how many cases of plant disease it has</b>
          </div>
          <form
            className='w-full max-w-[400px] pb-[10vh] mt-[1%]'
          >
            <select
              value={selectedCrop}
              onChange={(e: any) => {
                handleCropHeatmap(e.target.value as string);
                setHeatmapData([]);
              }}
              className='bg-white mt-[2px] w-full'
            >
              <option value="" disabled={selectedCrop ? true : false}>Select Crop to Display (Click Here)</option>
              <option value="beans">Beans</option>
              <option value="corn">Corn</option>
              <option value="rice">Rice</option>
              <option value="tomato">Tomato</option>
            </select>
          </form>

        </div>
      </div>
      <div className="z-50">
        <ClickedClusterModal clickedClusterData={clickedClusterData} isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  )
}

export default Maps