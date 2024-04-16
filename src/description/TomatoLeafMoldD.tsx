import tomatoLeafMold from '../assets/disease_images/tomatoLeafMold.jpg'

const TomatoLeafMoldD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={tomatoLeafMold} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Tomato Leaf Mold?
          </div>
          <div className="break-words">
            Tomato Leaf Mold is caused by a fungus named Passalora fulva.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Leaf Mold is a fungal disease characterized by the appearance of pale green to yellowish patches on the upper surface of tomato leaves, accompanied by a fuzzy, white to grayish growth on the underside.
          Leaf Mold thrives in warm, humid environments, particularly when temperatures range from 20 to 24°C and relative humidity exceeds 85%.
          Unlike many other tomato diseases, Leaf Mold is less dependent on free water for spore germination and infection, making it more prevalent in greenhouse and high-tunnel production systems.
          Spores of the fungus can be dispersed through air currents, plant contact, and contaminated equipment.
          Severe infections can result in defoliation, reduced photosynthetic capacity, and fruit sunscald due to increased exposure.
        </div>
      </div>
    </>
  )
}

export default TomatoLeafMoldD