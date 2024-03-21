import './App.css'
import Header from './components/Header'
import { useState } from 'react';


function App() {

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const formData = new FormData();

    formData.append('image', file);

    fetch('http://localhost:5000/upload_image', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Header />
      <div className='flex flex-wrap min-w-screen min-h-fit justify-evenly'>

        <div className='w-[400px] h-[500px] flex-initial border border-black'>
          <div className='text-base text-center'>
            Please insert an image below then select a crop to identify
          </div>
          <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
            Drag and Drop Image Here
          </div>

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
