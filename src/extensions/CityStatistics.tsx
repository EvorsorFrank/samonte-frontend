import { useState, useContext, useEffect } from "react";
import { locationData } from "../App"
import { Bar } from 'react-chartjs-2';
import Lottie from "lottie-react";
import {
    Chart as ChartJS,
    ArcElement,
    LinearScale,
    CategoryScale,
    BarElement
} from 'chart.js'
import loadingAnimation from '../assets/loadingAnimation.json'
import endpointAPI from "../endpointAPI";

ChartJS.register(
    ArcElement,
    LinearScale,
    CategoryScale,
    BarElement,
);

interface CityStatisticsProps {
    isVisible: boolean;
    onClose: any;
}

interface BeansCityDiseaseCount {
    disease: string;
    count: number;
}
interface CornCityDiseaseCount {
    disease: string;
    count: number;
}
interface RiceCityDiseaseCount {
    disease: string;
    count: number;
}
interface TomatoCityDiseaseCount {
    disease: string;
    count: number;
}

function CityStatistics({ isVisible, onClose }: CityStatisticsProps) {
    const baseURL = endpointAPI();
    const location = useContext(locationData)

    const [beansCityDiseaseCount, setBeansCityDiseaseCount] = useState<BeansCityDiseaseCount[]>([])
    const [cornCityDiseaseCount, setCornCityDiseaseCount] = useState<CornCityDiseaseCount[]>([])
    const [riceCityDiseaseCount, setRiceCityDiseaseCount] = useState<RiceCityDiseaseCount[]>([])
    const [tomatoCityDiseaseCount, setTomatoCityDiseaseCount] = useState<TomatoCityDiseaseCount[]>([])
    const [loadingData, setLoadingData] = useState<boolean>(false);

    const getPlantDiseaseCityCounts = async () => {
        try {
            const formData = new FormData();
            if (location) {
                formData.append('latitude', String(location.latitude));
                formData.append('longitude', String(location.longitude));
            }

            const response = await fetch(`${baseURL}/plant_disease_rankings_city`, {
                method: 'POST',
                headers: {
                    "ngrok-skip-browser-warning": "00000",
                },
                body: formData,
            })

            const data = await response.json();
            setBeansCityDiseaseCount(data.Beans);
            setCornCityDiseaseCount(data.Corn);
            setRiceCityDiseaseCount(data.Rice);
            setTomatoCityDiseaseCount(data.Tomato);
            setLoadingData(false)
        } catch (error) {
            console.error('Error fetching plant disease rankings:', error);
        }
    };

    useEffect(() => {
        setLoadingData(true);
        getPlantDiseaseCityCounts();
    }, []);

    const beansLabels = beansCityDiseaseCount.map(item => item.disease);
    const beansCounts = beansCityDiseaseCount.map(item => item.count);

    const cornLabels = cornCityDiseaseCount.map(item => item.disease);
    const cornCounts = cornCityDiseaseCount.map(item => item.count);

    const riceLabels = riceCityDiseaseCount.map(item => item.disease);
    const riceCounts = riceCityDiseaseCount.map(item => item.count);

    const tomatoLabels = tomatoCityDiseaseCount.map(item => item.disease);
    const tomatoCounts = tomatoCityDiseaseCount.map(item => item.count);

    if (!isVisible) {
        return null;
    } else {
        return (
            <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md text-center justify-center items-center z-40 flex`}>
                {loadingData &&
                    <div className="flex flex-col text-center">
                        <Lottie animationData={loadingAnimation} />
                        <div className="text-lg font-bold cursor-pointer" onClick={() => onClose()}>
                            Cancel
                        </div>
                    </div>
                }
                {!loadingData &&
                    <div className="max-w-[700px] flex-wrap w-screen mx-2  rounded-2xl bg-white border-black border text-black text-center ">
                        <div className="pt-2">
                            You live in: This is the count of plant diseases identified in your city
                        </div>
                        <div className="flex-wrap max-h-[500px] flex flex-row justify-center items-center overflow-y-auto border border-black mx-2 shadow-xl">
                            {(beansCounts.length > 0) &&
                                <div className='flex flex-initial flex-col mt-2 mx-3'>
                                    <div className="text-xl font-semibold">
                                        Beans
                                    </div>
                                    <Bar
                                        data={{
                                            labels: beansLabels,
                                            datasets: [
                                                {
                                                    label: 'Identification Count',
                                                    data: beansCounts,
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.8)',
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',
                                                    ],
                                                    borderWidth: 1,
                                                    barThickness: 15, // Adjust the height of all bars here
                                                },
                                            ],
                                        }}
                                        options={{
                                            indexAxis: 'y',
                                            scales: {
                                                x: {
                                                    stacked: true,
                                                },
                                                y: {
                                                    stacked: true,
                                                },
                                            },
                                            plugins: {
                                                legend: {
                                                    display: false, // Hiding legend for the bar chart
                                                },
                                            },
                                            layout: {
                                                padding: 1, // Adjust padding if needed
                                            },
                                        }}
                                    />
                                </div>
                            }
                            {(cornCounts.length > 0) &&
                                <div className='flex flex-initial flex-col mt-10 mx-3'>
                                    <div className="text-xl font-semibold">
                                        Corn
                                    </div>
                                    <Bar
                                        data={{
                                            labels: cornLabels,
                                            datasets: [
                                                {
                                                    label: 'Identification Count',
                                                    data: cornCounts,
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.8)',
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',
                                                    ],
                                                    borderWidth: 1,
                                                    barThickness: 15, // Adjust the height of all bars here
                                                },
                                            ],
                                        }}
                                        options={{
                                            indexAxis: 'y',
                                            scales: {
                                                x: {
                                                    stacked: true,
                                                },
                                                y: {
                                                    stacked: true,
                                                },
                                            },
                                            plugins: {
                                                legend: {
                                                    display: false, // Hiding legend for the bar chart
                                                },
                                            },
                                            layout: {
                                                padding: 1, // Adjust padding if needed
                                            },
                                        }}
                                    />
                                </div>
                            }
                            {(riceCounts.length > 0) &&
                                <div className='flex flex-initial flex-col mt-10 mx-3'>
                                    <div className="text-xl font-semibold">
                                        Rice
                                    </div>
                                    <Bar
                                        data={{
                                            labels: riceLabels,
                                            datasets: [
                                                {
                                                    label: 'Identification Count',
                                                    data: riceCounts,
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.8)',
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',
                                                    ],
                                                    borderWidth: 1,
                                                    barThickness: 15, // Adjust the height of all bars here
                                                },
                                            ],
                                        }}
                                        options={{
                                            indexAxis: 'y',
                                            scales: {
                                                x: {
                                                    stacked: true,
                                                },
                                                y: {
                                                    stacked: true,
                                                },
                                            },
                                            plugins: {
                                                legend: {
                                                    display: false, // Hiding legend for the bar chart
                                                },
                                            },
                                            layout: {
                                                padding: 1, // Adjust padding if needed
                                            },
                                        }}
                                    />
                                </div>
                            }
                            {(tomatoCounts.length > 0) &&
                                <div className='flex flex-initial flex-col mt-10 mx-3'>
                                    <div className="text-xl font-semibold">
                                        Tomato
                                    </div>
                                    <Bar
                                        data={{
                                            labels: tomatoLabels,
                                            datasets: [
                                                {
                                                    label: 'Identification Count',
                                                    data: tomatoCounts,
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.8)',
                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',
                                                    ],
                                                    borderWidth: 1,
                                                    barThickness: 15, // Adjust the height of all bars here
                                                },
                                            ],
                                        }}
                                        options={{
                                            indexAxis: 'y',
                                            scales: {
                                                x: {
                                                    stacked: true,
                                                },
                                                y: {
                                                    stacked: true,
                                                },
                                            },
                                            plugins: {
                                                legend: {
                                                    display: false, // Hiding legend for the bar chart
                                                },
                                            },
                                            layout: {
                                                padding: 1, // Adjust padding if needed
                                            },
                                        }}
                                    />
                                </div>
                            }
                        </div>
                        <div className="w-full mb-2">
                            <button className="h-7 w-20 border border-black rounded-full mt-2" onClick={() => onClose()}>
                                Close
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CityStatistics