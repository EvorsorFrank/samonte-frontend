import tomatoYellowLeafCurlVirus from '../assets/disease_images/tomatoYellowLeafCurlVirus.jpg'

const TomatoYellowLeafCurlVirusD = () => {
  return (
    <>
      <div className=" contents px-1">
        <img src={tomatoYellowLeafCurlVirus} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Tomato Yellow Leaf Curl Virus?
          </div>
          <div className="break-words">
            Tomato Yellow Leaf Curl Virus is caused by a virus named Geminivirus.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          Tomato Yellow Leaf Curl Virus (TYLCV) is a devastating viral disease that affects tomato plants, causing distinctive symptoms such as yellowing and curling of leaves, stunted growth, and reduced fruit production.
          The virus is primarily transmitted by the sweet potato whitefly (Bemisia tabaci), which feeds on infected plants and then spreads the virus to healthy ones.
          TYLCV can also be transmitted through contaminated tools, hands, or plant material during cultivation.
          Once infected, tomato plants may exhibit severe symptoms within a few weeks, leading to significant yield losses.
          TYLCV thrives in warm and tropical climates, with optimal temperatures for virus transmission and symptom development ranging from 25 to 30°C.
          The disease can spread rapidly within and between fields, especially under conditions of high whitefly populations and poor vector management.
        </div>
      </div>
    </>
  )
}

export default TomatoYellowLeafCurlVirusD