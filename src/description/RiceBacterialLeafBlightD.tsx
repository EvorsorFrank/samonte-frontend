import riceBacterialLeafBlight from '../assets/disease_images/riceBacterialLeafBlight.jpg'

const RiceBacterialLeafBlightD = () => {
  return (
    <div className=" contents px-1">
      <img src={riceBacterialLeafBlight} className='float-left w-[200px] m-4' />
      <div className="mx-2 text-balance">
        <div className="font-bold">
          What is Rice Bacterial Leaf Blight?
        </div>
        <div className="break-words">
          Rice Bacterial Leaf Blight is caused by a bacterium named Xanthomonas oryzae.
        </div>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Bacterial Leaf Blight has an appearance of water-soaked grayish-green lesions that is lined up vertically to the leaf and eventually,
          the affected leaf turns yellow to brown. The bacterial ooze can be seen on the tip of the rice.
          The bacteria can infect other plants by entering through the wounds of other plants. Cause of wounds from plants can be from winds, use of trimming tools, and handling plants.
          The bacteria is transferred through the means of liquid, which can be from windblown rain, splashing, and irrigation water.
          The disease lives well in warm temperatures between 25-30°C and humid conditions.
        </div>
      </div>
    </div>
  )
}

export default RiceBacterialLeafBlightD