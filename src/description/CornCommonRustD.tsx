import cornCommonRust from '../assets/disease_images/cornCommonRust.jpg'

const CornCommonRustD = () => {
  return (
    <div className=" contents px-1">
      <div className="font-bold text-xl">
        - Description -
      </div>
      <img src={cornCommonRust} className='float-left w-[200px] m-4' />
      <div className="mx-2 text-balance">
        <div className="font-bold">
          What is Corn Common Rust?
        </div>
        <div className="break-words">
          Corn Common Rust is caused by a fungus named Puccinia sorghi.
        </div>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Common Rust has an appearance of reddish-brown oval pustules (or pimples) that looks like rust, as the corn plant matures, it becomes dark in color. These
          pustules are scattered or clustered together in the leaf and produces spores that can transfer to another plant through wind.
          As the rust spreads, the leaf will turn yellow and if it's severe, it will die early. The young leaves are more susceptible to the rust and may die early than
          the older leaves. The fungus that causes the disease can spread through the winds especially during warm and windy periods, and when it is rainy,
          the water splashes and may contain the spores that spreads it.
          The disease lives well in cool and moist weather (15-23°C)
          The plant disease can also slow the yield by destroying the leaf which receives the majority of sunlight that are important to plants.
        </div>
      </div>
    </div>
  )
}

export default CornCommonRustD