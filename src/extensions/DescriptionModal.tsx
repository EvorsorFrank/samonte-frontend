import BeanAngularLeafSpotD from "../description/BeanAngularLeafSpotD";
import BeanRustD from "../description/BeanRustD";
import CornCommonRustD from "../description/CornCommonRustD";
import CornGrayLeafSpotD from "../description/CornGrayLeafSpotD";
import CornNorthernLeafBlightD from "../description/CornNorthernLeafBlightD";
import RiceBacterialLeafBlightD from "../description/RiceBacterialLeafBlightD";
import RiceBrownSpotD from "../description/RiceBrownSpotD";
import RiceLeafBlastD from "../description/RiceLeafBlastD";
import RiceLeafScaldD from "../description/RiceLeafScaldD";
import RiceNarrowBrownSpotD from "../description/RiceNarrowBrownSpotD";
import TomatoBacterialSpotD from "../description/TomatoBacterialSpotD";
import TomatoEarlyBlightD from "../description/TomatoEarlyBlightD";
import TomatoLateBlightD from "../description/TomatoLateBlightD";
import TomatoLeafMoldD from "../description/TomatoLeafMoldD";
import TomatoMosaicVirusD from "../description/TomatoMosaicVirusD";
import TomatoSeptoriaLeafSpotD from "../description/TomatoSeptoriaLeafSpotD";
import TomatoTargetSpotD from "../description/TomatoTargetSpotD";
import TomatoYellowLeafCurlVirusD from "../description/TomatoYellowLeafCurlVirusD";


interface DescriptionModalProps {
    isVisible: boolean;
    onClose: any;
    predictedClass: string;
}

function DescriptionModal({ isVisible, onClose, predictedClass }: DescriptionModalProps) {

    function renderContent() {
        switch (predictedClass) {
            case 'Bean Angular Leaf Spot':
                return <BeanAngularLeafSpotD />;
            case 'Bean Rust':
                return <BeanRustD />;
            case 'Corn Common Rust':
                return <CornCommonRustD />;
            case 'Corn Gray Leaf Spot':
                return <CornGrayLeafSpotD />;
            case 'Corn Northern Leaf Blight':
                return <CornNorthernLeafBlightD />;
            case 'Rice Bacterial Leaf Blight':
                return <RiceBacterialLeafBlightD />;
            case 'Rice Brown Spot':
                return <RiceBrownSpotD />;
            case 'Rice Leaf Blast':
                return <RiceLeafBlastD />;
            case 'Rice Leaf Scald':
                return <RiceLeafScaldD />;
            case 'Rice Narrow Brown Spot':
                return <RiceNarrowBrownSpotD />;
            case 'Tomato Bacterial Spot':
                return <TomatoBacterialSpotD />;
            case 'Tomato Early Blight':
                return <TomatoEarlyBlightD />;
            case 'Tomato Late Blight':
                return <TomatoLateBlightD />;
            case 'Tomato Leaf Mold':
                return <TomatoLeafMoldD />;
            case 'Tomato Mosaic Virus':
                return <TomatoMosaicVirusD />;
            case 'Tomato Septoria Leaf Spot':
                return <TomatoSeptoriaLeafSpotD />;
            case 'Tomato Target Spot':
                return <TomatoTargetSpotD />;
            case 'Tomato Yellow Leaf Curl Virus':
                return <TomatoYellowLeafCurlVirusD />;
            default:
                return <div>Unknown value</div>;
        }
    }

    if (!isVisible) {
        return null;
    } else {
        return (
            <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md text-center justify-center items-center z-50 flex`}>
                <div className="w-[500px] h-[500px] mx-2 bg-white rounded-xl flex flex-col  px-1 border border-black ">
                    <div className="text-xl font-bold">
                        {predictedClass}
                    </div>
                    <div className="overflow-y-auto w-full h-full mt-2 border border-black rounded-md  shadow-xl">
                        {renderContent()}
                    </div>
                    <div className="w-full mb-2">
                        <button className="h-7 w-20 border border-black rounded-full mt-2" onClick={() => onClose()}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DescriptionModal