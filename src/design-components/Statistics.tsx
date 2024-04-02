import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { motion } from "framer-motion"

import refreshIcon from "../assets/refreshIcon.png"
import ExtraStatistics from '../extensions/ExtraStatistics';
import CityStatistics from '../extensions/CityStatistics';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

interface PlantDiseaseCountsByCity {
    [key: string]: number;
}


const Statistics: React.FC = () => {
    const [identificationCount, setIdentificationCount] = useState<number>(0);
    const [beanCount, setBeanCount] = useState<number>(0);
    const [cornCount, setCornCount] = useState<number>(0);
    const [riceCount, setRiceCount] = useState<number>(0);
    const [tomatoCount, setTomatoCount] = useState<number>(0);
    const [plantDiseaseCountsByCity, setPlantDiseaseCountsByCity] = useState<PlantDiseaseCountsByCity>({});
    const [refreshed, setRefreshed] = useState<boolean>(false);
    const [showExtraStatistics, setShowExtraStatistics] = useState<boolean>(false);
    const [showCityStatistics, setShowCityStatistics] = useState<boolean>(false);


    const getIDCount = async () => {
        try {
            const response = await fetch('http://localhost:5000/identification_count', {
                method: 'GET',
            });
            const data = await response.json();
            setIdentificationCount(data.Beans + data.Corn + data.Rice + data.Tomato);
            setBeanCount(data.Beans);
            setCornCount(data.Corn);
            setRiceCount(data.Rice);
            setTomatoCount(data.Tomato);
        } catch (error: any) {
            console.error('Error fetching identification count:', error);
        }
    };

    const getPlantDiseaseCountsByCity = async () => {
        try {
            const response = await fetch('http://localhost:5000/plant_disease_counts', {
                method: 'GET',
            });
            const data = await response.json();
            setPlantDiseaseCountsByCity(data as PlantDiseaseCountsByCity);
        } catch (error: any) {
            console.error('Error fetching plant disease counts by city:', error);
        }
    };

    useEffect(() => {
        getIDCount();
        getPlantDiseaseCountsByCity();
    }, []);

    const sortedPlantDiseaseCounts = Object.entries(plantDiseaseCountsByCity)
        .map(([city, count]) => ({ city, count }))
        .sort((a: { count: number }, b: { count: number }) => b.count - a.count);
    const topCities = sortedPlantDiseaseCounts.slice(0, 5);

    const cropIDStat = {
        labels: ['Beans', 'Corn', 'Rice', 'Tomato'],
        datasets: [
            {
                data: [beanCount, cornCount, riceCount, tomatoCount],
                backgroundColor: ['green', 'yellow', 'blue', 'red'],
            },
        ],
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center  cursor-pointer bg-green-200 rounded-full" >
                <motion.div className='' animate={{ rotate: refreshed ? 360 : 0 }} onClick={() => { setRefreshed(!refreshed); getIDCount(); getPlantDiseaseCountsByCity(); }}>
                    <img src={refreshIcon} alt="Refresh" />
                </motion.div>
                <div className="text-xs">
                    Refresh
                </div>
            </div>

            <div className='flex'>
                <div className='text-[10px] bg-green-200 h-24 w-24 place-content-center text-center rounded-full m-5'>
                    <div>
                        # of Identifications the Website Made
                    </div>
                    <div className='text-xl font-semibold'>
                        {identificationCount}
                    </div>
                </div>
                <div className='text-[10px] mt-10 h-48 w-48 place-content-center text-center rounded-full '>
                    <Pie
                        data={cropIDStat}
                        options={{
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: function (context: any) {
                                            let label = context.label || '';
                                            if (label) {
                                                label += ': ';
                                            }
                                            const count = context.raw;
                                            label += count;
                                            const percentage = ((count / identificationCount) * 100).toFixed(2);
                                            label += ' (' + percentage + '%)';
                                            return label;
                                        },
                                    },
                                },
                                legend: {
                                    labels: {
                                        color: 'black',
                                    },
                                },
                            },
                            events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove', 'touchend'],
                        }}
                    />

                    <div>
                        (Click/Tap to see counts/percentage of identifications made by app)
                    </div>
                </div>
            </div>

            <div className='mt-5 '>
                <div className='text-lg font-semibold mb-2 text-center'>
                    City Rankings by App Usage
                </div>
                <ul className='text-center'>
                    {topCities.map((city, index) => (
                        <li key={index}>
                            {index + 1}. {city.city}: {city.count}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col text-center items-center justify-center w-full mt-5">
                <button className='border border-black rounded-full w-full' onClick={() => setShowExtraStatistics(true)}>
                    View Total Plant Disease Counts
                </button>
                <button className='border border-black rounded-full w-full mt-2' onClick={() => setShowCityStatistics(true)}>
                    View Current City's Plant Disease Occurence
                </button>
            </div>

            {showExtraStatistics &&
                <ExtraStatistics isVisible={showExtraStatistics} onClose={() => setShowExtraStatistics(false)} />
            }

            {showCityStatistics &&
                <CityStatistics isVisible={showCityStatistics} onClose={() => setShowCityStatistics(false)} />
            }

        </>
    );
};

export default Statistics;