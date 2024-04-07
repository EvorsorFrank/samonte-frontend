import { useContext, useState, useCallback } from "react";
import Dropzone, { FileWithPath } from "react-dropzone";
import Lottie from "lottie-react";
import identifyingLeaf from "../assets/identifyingLeaf.json"
import { motion } from "framer-motion"
import { locationData } from "../App"
import endpointAPI from "../endpointAPI";
import DescriptionModal from "../extensions/DescriptionModal";
import MTModal from "../extensions/MTModal";

const PlantDiseaseIdentifier = () => {
    const baseURL = endpointAPI();
    const location = useContext(locationData)

    const [selectedIdentification, setSelectedIdentification] = useState<string>("")
    const [uploadedFile, setUploadedFile] = useState<FileWithPath | null>(null)
    const [predictedClass, setPredictedClass] = useState<string>('')
    const [latitude, setLatitude] = useState<number>(location.latitude)
    const [showDescriptionModal, setShowDescriptionModal] = useState<boolean>(false)
    const [showMTModal, setShowMTModal] = useState<boolean>(false)

    const [donePrediction, setDonePrediction] = useState<boolean>(false)
    const [loadingPredict, setLoadingPredict] = useState<boolean>(false)

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);

    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setUploadedFile(acceptedFiles[0]);
    }, []);

    const handleUpload = async () => {
        try {
            if (uploadedFile) {
                const formData = new FormData();
                formData.append('file', uploadedFile);
                formData.append('predictType', selectedIdentification);
                if (location) {
                    formData.append('latitude', String(location.latitude));
                    formData.append('longitude', String(location.longitude));
                }
                formData.append('date', formattedDate)

                const response = await fetch(`${baseURL}/predict`, {
                    method: 'POST',
                    body: formData,
                })

                const data = await response.json()
                setSelectedIdentification('')
                setPredictedClass(data.class)
                console.log(data.class)
                setLoadingPredict(false)
                setDonePrediction(true)
            }
        } catch (error: any) {
            console.error('Error Uploading', error)
        }

    };

    return (
        <>
            <div className="flex flex-col">
                <div className="my-1">
                    {!uploadedFile && !loadingPredict && !donePrediction &&
                        <Dropzone accept={{ 'image/jpeg': [], 'image/png': [] }} onDrop={onDrop}>
                            {({ getRootProps, getInputProps }) => (
                                <section className=" h-28 items-center justify-center rounded-full mx-8 pt-5 text-center border-black outline-dashed">
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag and Drop leaf image file here or click here to upload image file to check for plant disease</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    }

                    {uploadedFile && !loadingPredict && !donePrediction &&
                        <div className="flex flex-col min-w-screen  place-content-evenly">
                            <p>Uploaded File:</p>
                            <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded File" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                            <button className='text-red-500 ' onClick={() => setUploadedFile(null)}>
                                Remove
                            </button>
                        </div>
                    }
                </div>
                {uploadedFile && !loadingPredict && !donePrediction &&
                    <>
                        <select className='border border-black text-black' value={selectedIdentification} onChange={(e) => setSelectedIdentification(e.target.value)}>
                            <option value="" disabled={selectedIdentification ? true : false}>Which crop you uploaded? (Click Here)</option>
                            <option value="Beans">Beans</option>
                            <option value="Corn">Corn</option>
                            <option value="Rice">Rice</option>
                            <option value="Tomato">Tomato</option>
                        </select>

                        <button onClick={() => { handleUpload(); setLoadingPredict(true) }}
                            className={`
                                ${selectedIdentification ? '' : 'pointer-events-none text-gray-500 border-gray-500'} 
                                h-8 rounded-full border border-black mt-4`}>
                            {(latitude != 0) ? (selectedIdentification ? 'Upload' : 'Select Crop First') : 'Turn Your Location On'}
                        </button>
                    </>
                }
                {loadingPredict &&
                    <Lottie animationData={identifyingLeaf} />
                }
                {donePrediction &&
                    <motion.div className='flex flex-col' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="text-center text-lg font-semibold">
                            Your crop has: {predictedClass}
                        </div>
                        {uploadedFile && (
                            <div className="flex flex-col min-w-screen place-content-evenly">
                                <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded File" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                            </div>
                        )}
                        <button onClick={() => { setDonePrediction(false); setUploadedFile(null) }} className="border border-black rounded-full w-full mt-2">
                            Try Again
                        </button>
                        <button className="border border-black rounded-full w-full mt-2" onClick={() => setShowDescriptionModal(true)}>
                            What is {predictedClass}?
                        </button>
                        {showDescriptionModal &&
                            <DescriptionModal predictedClass={predictedClass} isVisible={showDescriptionModal} onClose={() => setShowDescriptionModal(false)} />
                        }
                        <button className="text-balance border border-black rounded-full w-full mt-2" onClick={() => setShowDescriptionModal(true)}>
                            Management and Treatment
                        </button>
                        {showMTModal &&
                            <MTModal predictedClass={predictedClass} isVisible={showMTModal} onClose={() => setShowMTModal(false)} />
                        }
                    </motion.div>
                }
                <div>
                    {location.latitude}
                    {location.longitude}
                </div>

            </div>
        </>
    );
};

export default PlantDiseaseIdentifier;