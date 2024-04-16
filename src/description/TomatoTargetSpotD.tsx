import tomatoTargetSpot from '../assets/disease_images/tomatoTargetSpot.jpg'

const TomatoTargetSpotD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={tomatoTargetSpot} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Tomato Target Spot?
          </div>
          <div className="break-words">
            Tomato Target Spot is caused by a fungus named Corynespora cassiicola.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          Tomato Target Spot, also known as Tomato Corynespora Leaf Spot, is a fungal disease characterized by the development of circular to irregularly shaped lesions with concentric rings on tomato leaves, stems, and fruit.
          Target Spot typically occurs in warm and humid conditions, thriving in temperatures ranging from 20 to 30°C and high relative humidity levels.
          The disease spreads through splashing water, wind, and contact with contaminated plant material.
          Initially, lesions appear as small, water-soaked spots that gradually enlarge and develop distinctive concentric rings, resembling a target.
          Severe infections can lead to defoliation, reduced photosynthetic capacity, and fruit decay, ultimately impacting yield.
        </div>
      </div>
    </>
  )
}

export default TomatoTargetSpotD