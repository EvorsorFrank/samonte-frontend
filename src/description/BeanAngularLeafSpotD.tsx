import beanAngularLeafSpot from '../assets/disease_images/beanAngularLeafSpot.jpg'

const BeanAngularLeafSpotD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={beanAngularLeafSpot} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Bean Angular Leaf Spot?
          </div>
          <div className="break-words">
            Bean Angular Leaf Spot is caused by a fungus named Phaeoisariopsis griseola.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Angular Leaf Spot's lesions on leaves shows an angular (3 or aboves sides shape) appearance. These lesions can be brown
          spots with a yellowish-brown or silver center and may sometimes have yellow halo around it.
          The disease grows rapidly during warm periods (24°C) and can also occur during moderate to warm temperatures
          (16°C-28°C)
          The plant disease can also affect the pods, reducing or slowing the production of beans since it weakens the plant itself.
        </div>
      </div>
    </>
  )
}

export default BeanAngularLeafSpotD