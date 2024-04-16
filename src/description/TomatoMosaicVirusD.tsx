import tomatoMosaicVirus from '../assets/disease_images/tomatoMosaicVirus.jpg'

const TomatoMosaicVirusD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={tomatoMosaicVirus} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Tomato Mosaic Virus?
          </div>
          <div className="break-words">
            Tomato Mosaic Virus is caused by a virus named tobamovirus.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Mosaic Virus (ToMV) is a highly contagious viral disease that affects tomato plants, causing distinctive mosaic-like patterns of light and dark green on the leaves.
          The virus is primarily transmitted through contaminated seeds, infected plant debris, and mechanical transmission via tools and hands during cultivation.
          Infected plants may exhibit stunted growth, leaf distortion, and reduced fruit quality and yield.
          ToMV can persist in weed hosts and alternative host plants, serving as reservoirs for the virus and contributing to its spread.
          Optimal temperatures for ToMV replication and spread typically range from 20 to 30°C.
          Although the virus does not typically kill tomato plants outright, it can severely reduce marketable yields and render fruits unmarketable due to discoloration and deformities.
        </div>
      </div>
    </>
  )
}

export default TomatoMosaicVirusD