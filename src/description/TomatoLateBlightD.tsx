import tomatoLateBlight from '../assets/disease_images/tomatoLateBlight.jpg'

const TomatoLateBlightD = () => {
  return (
    <div className=" contents px-1">
      <img src={tomatoLateBlight} className='float-left w-[200px] m-4' />
      <div className="mx-2 text-balance">
        <div className="font-bold">
          What is Tomato Late Blight?
        </div>
        <div className="break-words">
          Tomato Late Blight is caused by a fungus named Phytophthora infestans.
        </div>
        <div className="font-bold">
          Signs and Symptoms
        </div>
        <div className="">
          The Late Blight is a destructive fungal disease characterized by rapidly spreading, water-soaked lesions on leaves, stems, and fruits of tomato plants.
          The causal agent is the oomycete pathogen Phytophthora infestans, which thrives in cool, moist conditions.
          Late Blight is notorious for causing devastating epidemics, especially during periods of prolonged wet weather.
          Spores of the pathogen can travel long distances through air currents, facilitating rapid spread within and between fields.
          Ideal conditions for Late Blight development include temperatures ranging from 15 to 20°C and relative humidity above 90%.
          The disease progresses swiftly, often leading to complete defoliation and fruit rot, resulting in severe yield losses.
        </div>
      </div>
    </div>
  )
}

export default TomatoLateBlightD