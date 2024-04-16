import cornNorthernLeafBlight from "../assets/disease_images/cornNorthernLeafBlight.jpg"

const CornNorthernLeafBlightD = () => {
  return (
    <>
      <div className=" contents px-1">
        <div className="font-bold text-xl">
          - Description -
        </div>
        <img src={cornNorthernLeafBlight} className='float-left w-[200px] m-4' />
        <div className="mx-2 text-balance">
          <div className="font-bold">
            What is Corn Northern Leaf Blight?
          </div>
          <div className="break-words">
            Corn Northern Leaf Blight is caused by a fungus named Exerohilum turcicum.
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Northern Leaf Blight has an appearance of oval or cigar-shaped lesions that has a yellowish-brown centers and dark brown to black borders.
          These lesions are lined up vertically with the leaf.
          As the rust spreads, the affected area will turn the leaf yellow. Those yellow leaves might fall out, but it doesn't mean the threat is removed because the
          fungus spores can fly with the wind blow and transfer to another plant. And if it's rainy, the water splashes and may contain the spores that spreads it.
          The fallen leaves can determine the severity of bean angular leaf spot.
          The disease lives well in moderate temperatures between 18 to 27°C.
          The plant disease can also slow the yield by destroying the leaf which receives the majority of sunlight that are important to plants.
        </div>
      </div>
    </>
  )
}

export default CornNorthernLeafBlightD