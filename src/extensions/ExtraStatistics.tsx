import { useState, useContext, useEffect } from "react";
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

ChartJS.register(
    ArcElement,
    LinearScale,
    CategoryScale,
    BarElement,
);

interface ExtraStatisticsProps {
    isVisible: boolean;
    onClose: any;
}

interface BeansDiseaseCount {
    disease: string;
    count: number;
}
interface CornDiseaseCount {
    disease: string;
    count: number;
}
interface RiceDiseaseCount {
    disease: string;
    count: number;
}
interface TomatoDiseaseCount {
    disease: string;
    count: number;
}

function ExtraStatistics({ isVisible, onClose }: ExtraStatisticsProps) {

    const [beansDiseaseCount, setBeansDiseaseCount] = useState<BeansDiseaseCount[]>([])
    const [cornDiseaseCount, setCornDiseaseCount] = useState<CornDiseaseCount[]>([])
    const [riceDiseaseCount, setRiceDiseaseCount] = useState<RiceDiseaseCount[]>([])
    const [tomatoDiseaseCount, setTomatoDiseaseCount] = useState<TomatoDiseaseCount[]>([])
    const [loadingData, setLoadingData] = useState<boolean>(false);

    const getPlantDiseaseCounts = async () => {
        try {
            const response = await fetch('http://localhost:5000/plant_disease_rankings', {
                method: 'GET',
            });
            const data = await response.json();
            setBeansDiseaseCount(data.Beans);
            setCornDiseaseCount(data.Corn);
            setRiceDiseaseCount(data.Rice);
            setTomatoDiseaseCount(data.Tomato);
            setLoadingData(false)
        } catch (error) {
            console.error('Error fetching plant disease rankings:', error);
        }
    };

    useEffect(() => {
        setLoadingData(true);
        getPlantDiseaseCounts();
    }, []);

    const beansLabels = beansDiseaseCount.map(item => item.disease);
    const beansCounts = beansDiseaseCount.map(item => item.count);

    const cornLabels = cornDiseaseCount.map(item => item.disease);
    const cornCounts = cornDiseaseCount.map(item => item.count);

    const riceLabels = riceDiseaseCount.map(item => item.disease);
    const riceCounts = riceDiseaseCount.map(item => item.count);

    const tomatoLabels = tomatoDiseaseCount.map(item => item.disease);
    const tomatoCounts = tomatoDiseaseCount.map(item => item.count);

    const barChartOptions = {
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
            tooltip: {
                enabled: false, // Disable tooltip to prevent overlap with custom labels
            },
            customLabels: {
                labels: [], // Custom labels will be added dynamically
            },
        },
        layout: {
            padding: 1, // Adjust padding if needed
        },
    };

    const customLabelsPlugin = {
        id: 'customLabels',
        afterDatasetsDraw: (chart: any, _e: any, _options: any) => {
            const ctx = chart.ctx;
            chart.data.datasets.forEach((dataset: any, datasetIndex: any) => {
                const meta = chart.getDatasetMeta(datasetIndex);
                if (!meta.hidden) {
                    meta.data.forEach((element: any, index: any) => {
                        // Draw the count at the end of each bar
                        const data = dataset.data[index];
                        const dataString = data.toString();
                        ctx.save();
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'middle';
                        const padding = 5; // Padding between bar and label
                        const position = element.tooltipPosition();
                        ctx.fillText(dataString, position.x + padding, position.y);
                        ctx.restore();
                    });
                }
            });
        },
    };

    if (!isVisible) {
        return null;
    } else {
        return (
            <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md text-center justify-center items-center z-40 flex`}>

            </div>
        )
    }
}

export default ExtraStatistics