import './App.css'
import Header from './components/Header'
import PlantDiseaseIdentifier from './design-components/PlantDiseaseIdentifier'


function App() {

  return (
    <>
      <Header />
      <div className='flex flex-wrap min-w-screen min-h-fit justify-evenly'>

        <div className='w-[350px] h-[500px] flex-initial border border-black'>
          <PlantDiseaseIdentifier/>
        </div>

        <div className='w-[400px] flex-initial border border-black'>
          box 2
        </div>

        <div className='w-[400px] flex-initial border border-black'>
          box3
        </div>

        <div className='w-[400px] flex-initial border border-black'>
          box 4
        </div>

      </div>
    </>
  )
}

export default App
