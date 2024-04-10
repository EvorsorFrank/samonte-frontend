import riceLeafScald from "../assets/disease_images/riceLeafScald.jpg"

const RiceLeafScaldD = () => {
  return (
    <div className=" contents px-1">
      <img src={riceLeafScald} className='float-left w-[200px] m-4' />
      <div className="mx-2 text-balance">
        <div className="font-bold">
          What is Rice Leaf Scald?
        </div>
        <div className="break-words">
          Rice Leaf Scald is caused by a fungus named Microdochium oryzae.
        </div>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Leaf Scald has an appearance of light brown oblong lesions and eventually turns to redish brown with light brown halos. It gives a scalded appearance
          and appears on the leaf tips or edges.
          The fungus that causes the disease can spread through the winds especially during warm and windy periods, and when it is rainy,
          the water splashes and may contain the spores that spreads it.
          The plant disease develops quickly when the plant is wounded or damaged.
          The plant disease can also slow the yield by destroying the leaf which receives the majority of sunlight that are important to plants.
        </div>
      </div>
    </div>
  )
}

export default RiceLeafScaldD