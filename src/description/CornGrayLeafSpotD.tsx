import cornGrayLeafSpot from '../assets/disease_images/cornGrayLeafSpot.jpg'

const CornGrayLeafSpotD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={cornGrayLeafSpot} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Corn Gray Leaf Spot?
          </div>
          <div className="break-words">
            Corn Gray Leaf Spot is caused by a fungus named Cercospora zeae-maydis.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Gray Leaf Spot's early symptoms has an appearance of small dot with yellow halo, then progresses and turns into
          narrow rectangular yellowish-brown lesions with dark borders, and after some time, these lesions can become gray.
          These lesions may eventually join together and killing the leaf. The fungus that causes the disease can spread through the
          winds especially during warm and windy periods, and when it is rainy,
          the water splashes and may contain the spores that spreads it.
          The disease lives well in warm and humid weather (25-30°C).
          The plant disease can also slow the yield by destroying the leaf which receives the majority of sunlight that are important to plants.
        </div>
      </div>
    </>
  )
}

export default CornGrayLeafSpotD