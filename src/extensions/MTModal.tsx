import BeanAngularLeafSpotMT from "../treatment-management/BeanAngularLeafSpotMT";
import BeanRustMT from "../treatment-management/BeanRustMT";
import CornCommonRustMT from "../treatment-management/CornCommonRustMT";
import CornGrayLeafSpotMT from "../treatment-management/CornGrayLeafSpotMT";
import CornNorthernLeafBlightMT from "../treatment-management/CornNorthernLeafBlightMT";
import RiceBacterialLeafBlightMT from "../treatment-management/RiceBacterialLeafBlightMT";
import RiceBrownSpotMT from "../treatment-management/RiceBrownSpotMT";
import RiceLeafBlastMT from "../treatment-management/RiceLeafBlastMT";
import RiceLeafScaldMT from "../treatment-management/RiceLeafScaldMT";
import RiceNarrowBrownSpotMT from "../treatment-management/RiceNarrowBrownSpotMT";
import TomatoBacterialSpotMT from "../treatment-management/TomatoBacterialSpotMT";
import TomatoEarlyBlightMT from "../treatment-management/TomatoEarlyBlightMT";
import TomatoLateBlightMT from "../treatment-management/TomatoLateBlightMT";
import TomatoLeafMoldMT from "../treatment-management/TomatoLeafMoldMT";
import TomatoMosaicVirusMT from "../treatment-management/TomatoMosaicVirusMT";
import TomatoSeptoriaLeafSpotMT from "../treatment-management/TomatoSeptoriaLeafSpotMT";
import TomatoTargetSpotMT from "../treatment-management/TomatoTargetSpotMT";
import TomatoYellowLeafCurlVirusMT from "../treatment-management/TomatoYellowLeafCurlVirusMT";


interface MTModalProps {
    isVisible: boolean;
    onClose: any;
    predictedClass: string;
}

function MTModal({ isVisible, onClose, predictedClass }: MTModalProps) {

    function renderContent() {
        switch (predictedClass) {
            case 'Bean Angular Leaf Spot':
                return <BeanAngularLeafSpotMT />;
            case 'Bean Rust':
                return <BeanRustMT />;
            case 'Corn Common Rust':
                return <CornCommonRustMT />;
            case 'Corn Gray Leaf Spot':
                return <CornGrayLeafSpotMT />;
            case 'Corn Northern Leaf Blight':
                return <CornNorthernLeafBlightMT />;
            case 'Rice Bacterial Leaf Blight':
                return <RiceBacterialLeafBlightMT />;
            case 'Rice Brown Spot':
                return <RiceBrownSpotMT />;
            case 'Rice Leaf Blast':
                return <RiceLeafBlastMT />;
            case 'Rice Leaf Scald':
                return <RiceLeafScaldMT />;
            case 'Rice Narrow Brown Spot':
                return <RiceNarrowBrownSpotMT />;
            case 'Tomato Bacterial Spot':
                return <TomatoBacterialSpotMT />;
            case 'Tomato Early Blight':
                return <TomatoEarlyBlightMT />;
            case 'Tomato Late Blight':
                return <TomatoLateBlightMT />;
            case 'Tomato Leaf Mold':
                return <TomatoLeafMoldMT />;
            case 'Tomato Mosaic Virus':
                return <TomatoMosaicVirusMT />;
            case 'Tomato Septoria Leaf Spot':
                return <TomatoSeptoriaLeafSpotMT />;
            case 'Tomato Target Spot':
                return <TomatoTargetSpotMT />;
            case 'Tomato Yellow Leaf Curl Virus':
                return <TomatoYellowLeafCurlVirusMT />;
            default:
                return <div>Unknown value</div>;
        }
    }

    if (!isVisible) {
        return null;
    } else {
        return (
            <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md text-center justify-center items-center z-50 flex`}>
                <div className="min-w-[400px] min-h-[400px] w-[500px] h-[500px] mx-2 bg-white rounded-xl flex flex-col ">
                    <div className="text-lg font-bold">
                        {predictedClass}
                    </div>
                    <div className="overflow-y-auto w-full h-full">
                        {renderContent()}
                    </div>
                    <div className="h-10" onClick={() => onClose()}>
                        Close
                    </div>
                </div>
            </div>
        )
    }
}

export default MTModal