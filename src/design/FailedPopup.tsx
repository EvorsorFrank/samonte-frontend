interface FailedPopupProps {
    isVisible: boolean;
    onClose: any;
}

function FailedPopup({ isVisible, onClose }: FailedPopupProps) {

    if (!isVisible) {
        return null;
    } else {
        return (
            <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  justify-center items-center z-40 flex`}>
                <div className="w-[200px] flex flex-col rounded-2xl bg-white border-red-500 border text-red-500">
                    <div className="text-center">
                        Failed to Upload
                    </div>
                    <div className="text-center">
                        Please try again later
                    </div>
                </div>
            </div>
        )
    }
}

export default FailedPopup