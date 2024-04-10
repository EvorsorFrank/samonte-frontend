import tomatoBacterialSpot from '../assets/disease_images/tomatoBacterialSpot.jpg'
const TomatoBacterialSpotD = () => {
  return (
    <div className=" contents px-1">
      <img src={tomatoBacterialSpot} className='float-left w-[200px] m-4' />
      <div className="mx-2 text-balance">
        <div className="font-bold">
          What is Tomato Bacterial Spot?
        </div>
        <div className="break-words">
          Tomato Bacterial Spot is caused by a bacterium named Xanthomonas vesicatoria, Xanthomonas euvesicatoria, Xanthomonas gardneri, and Xanthomonas perforans.
        </div>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Bacterial Spot presents as small, dark brown lesions surrounded by a yellow halo on the leaves, stems, and fruits of tomato plants.
          The disease is caused by the bacterium Xanthomonas campestris pv. vesicatoria and is primarily spread through contaminated seeds, infected plant debris, and splashing water.
          Warm and humid conditions, typically between 20 to 30°C, provide an optimal environment for the proliferation of the bacteria.
          During periods of rain or overhead irrigation, the bacteria can be disseminated through water droplets, facilitating its spread within the crop.
          Tomato Bacterial Spot significantly affects plant health by causing defoliation, reducing photosynthetic capacity, and ultimately compromising yield potential.
        </div>
      </div>
    </div>
  )
}

export default TomatoBacterialSpotD