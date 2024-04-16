import riceLeafBlast from '../assets/disease_images/riceLeafBlast.jpg'

const RiceLeafBlastD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={riceLeafBlast} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Rice Leaf Blast?
          </div>
          <div className="break-words">
            Rice Leaf Blast is caused by a fungus named Magnaporthe oryzae.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Leaf Blast early symptoms has an appearance of small bluish green spots then after a while in favorable environment which
          is humid or moist, they will eventually turn into blasted or burn shaped spots with gray center and dark brown borders.
          The fungus that causes the disease can spread through the winds especially during warm and windy periods, and when it is rainy,
          the water splashes and may contain the spores that spreads it.
          The disease lives well in warm temperatures between 25 to 28°C and humid conditions.
          The plant disease can also slow the yield by destroying the leaf which receives the majority of sunlight that are important to plants.
        </div>
      </div>
    </>
  )
}

export default RiceLeafBlastD