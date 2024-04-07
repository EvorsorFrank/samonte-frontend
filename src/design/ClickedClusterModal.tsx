

interface ClickedClusterModalProps {
    isVisible: boolean;
    onClose: any;
    clickedClusterData: [string, number][]
}

function ClickedClusterModal({ isVisible, onClose, clickedClusterData }: ClickedClusterModalProps) {


    if (!isVisible) {
        return null;
    } else {
        return (
            <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md text-center justify-center items-center flex `}>
                <div className="absolute w-[300px] h-[200px] bg-white flex flex-col rounded-xl">
                    <div className="h-full">
                        <div className="font-bold">
                            Plant Disease Cases in the Area:
                        </div>
                        <div className="mt-3 ">
                            {clickedClusterData.map(([disease, count], index) => (
                                <div key={index}>
                                    {`${disease}: ${count}`}
                                </div>
                            ))}
                        </div>
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

export default ClickedClusterModal