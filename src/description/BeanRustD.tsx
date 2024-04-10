import beanRust from '../assets/disease_images/beanRust.jpg'

const BeanRustD = () => {
  return (
    <div className=" contents px-1">
      <div className="font-bold text-xl">
        - Description -
      </div>
      <img src={beanRust} className='float-left w-[200px] m-4' />
      <div className="mx-2 text-balance">
        <div className="font-bold">
          What is Bean Rust?
        </div>
        <div className="break-words">
          Bean Rust is caused by a fungus named Uromyces appendiculatus.
        </div>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          From its name, it has an appearance of rust. It starts as tiny white spots and becomes reddish-brown. These reddish-brown or dark spots form yellowing on
          their surroundings and can be located mainly on the undersides of the bean leaves; they will be accompanied by powdery spores that can spread through the
          whole plant and other plants through the air.  As the rust spreads, the affected area will turn the leaf yellow. Those yellow leaves might fall out, but it doesn't mean the threat is removed because the
          fungus spores can fly with the wind blow and transfer to another plant. The fallen leaves can determine the severity of bean angular leaf spot.
        </div>
      </div>
    </div>
  )
}

export default BeanRustD