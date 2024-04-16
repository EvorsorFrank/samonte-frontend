import tomatoEarlyBlight from '../assets/disease_images/tomatoEarlyBlight.jpg'

const TomatoEarlyBlightD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={tomatoEarlyBlight} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Tomato Early Blight?
          </div>
          <div className="break-words">
            Tomato Early Blight is caused by a fungus named Alternaria solani.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Early Blight is characterized by the appearance of dark brown to black lesions with concentric rings on the lower leaves of tomato plants.
          It typically manifests during warm and humid weather conditions.
          Spores of the fungus can survive in plant debris and soil, where they can overwinter and infect new plants in subsequent growing seasons.
          Early Blight spreads through splashing water, wind, and contaminated gardening tools, as well as by infected seeds or transplants.
          Optimal conditions for disease development include temperatures ranging from 24 to 28°C and high humidity levels.
          Early Blight can lead to significant defoliation, reduced fruit quality, and decreased yield if left unmanaged.
        </div>
      </div>
    </>
  )
}

export default TomatoEarlyBlightD