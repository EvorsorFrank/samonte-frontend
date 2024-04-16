import riceBrownSpot from '../assets/disease_images/riceBrownSpot.jpg'

const RiceBrownSpotD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={riceBrownSpot} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Rice Brown Spot?
          </div>
          <div className="break-words">
            Rice Brown Spot is caused by a fungus named Bipolaris oryzae.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Brown Spot has an appearance of dark brown oval spots with yellow halo.
          The fungus that causes the disease can spread through the winds especially during warm and windy periods, and when it is rainy,
          the water splashes and may contain the spores that spreads it.
          The disease lives well in warm temperatures between 25 to 30°C and humid conditions.
          The plant disease can also slow the yield by destroying the leaf which receives the majority of sunlight that are important to plants.
        </div>
      </div>
    </>
  )
}

export default RiceBrownSpotD