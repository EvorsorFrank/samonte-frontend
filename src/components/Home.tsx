import Library from '../design-components/Library'
import Maps from '../design-components/Maps'
import PlantDiseaseIdentifier from '../design-components/PlantDiseaseIdentifier'
import Statistics from '../design-components/Statistics'


const Home = () => {
    return (
        <>
            <div className='w-[350px] h-[450px] flex-initial border-b-[1px] md:border-b-[0px]'>
                <div className='text-center text-lg font-bold mb-1'>
                    Identifier
                </div>
                <PlantDiseaseIdentifier />
            </div>

            <div className='w-[350px] h-[550px] flex-initial  border-b-[1px] md:border-b-[0px]'>
                <div className='text-center text-lg font-bold mb-1'>
                    Statistics
                </div>
                <Statistics />
            </div>

            <div className='w-[350px] h-[650px] flex-initial  border-b-[1px] md:border-b-[0px] z-10'>
                <div className='text-center text-lg font-bold mb-1'>
                    Maps
                </div>
                <Maps />
            </div>

            <div className='w-[350px] h-[500px] flex-initial  border-b-[1px] md:border-b-[0px]  '>
                <div className='text-center text-lg font-bold mb-1'>
                    Library
                </div>
                <Library />
            </div>
        </>
    )
}

export default Home