import tomatoSeptoriaLeafSpot from '../assets/disease_images/tomatoSeptoriaLeafSpot.jpg'

const TomatoSeptoriaLeafSpotD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={tomatoSeptoriaLeafSpot} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Tomato Septoria Leaf Spot?
          </div>
          <div className="break-words">
            Tomato Septoria Leaf Spot is caused by a fungus named Septoria lycopersici.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Septoria Leaf Spot is a prevalent fungal disease characterized by the development of small, circular lesions with dark centers and lighter halos on the lower leaves of tomato plants.
          Septoria Leaf Spot typically emerges during warm, humid conditions, particularly in areas with frequent rainfall or overhead irrigation.
          The disease spreads through splashing water, wind-blown rain, and contact with contaminated plant material.
          Optimal temperatures for disease progression range from 18 to 28°C, with high relative humidity facilitating spore germination and lesion formation.
          As the infection advances, lesions may coalesce, leading to extensive defoliation and decreased photosynthetic efficiency.
          The Septoria Leaf Spot can have a significant impact on yield, particularly if left untreated.
        </div>
      </div>
    </>
  )
}

export default TomatoSeptoriaLeafSpotD