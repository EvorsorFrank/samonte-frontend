import riceNarrowBrownSpot from '../assets/disease_images/riceNarrowBrownSpot.jpg'

const RiceNarrowBrownSpotD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={riceNarrowBrownSpot} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Rice Narrow Brown Spot?
          </div>
          <div className="break-words">
            Rice Narrow Brown Spot is caused by a fungus named Cercospora janseana.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Narrow Brown Spot has an appearance of dark brown lesions that are lined up with the leaf and may join together to form brown linear necrotic regions.
          The fungus that causes the disease can spread through the winds especially during warm and windy periods, and when it is rainy,
          the water splashes and may contain the spores that spreads it.
          The disease lives well in moderate to warm temperatures between 25 to 28°C and humid conditions.
          The plant disease can also slow the yield by destroying the leaf which receives the majority of sunlight that are important to plants.
        </div>
      </div>
    </>
  )
}

export default RiceNarrowBrownSpotD