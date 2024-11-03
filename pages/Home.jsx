import { Suspense } from 'react'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Earth from '../models/Earth'
import Sky from '../models/Sky'

{/* <div className="absolute top-28 left-0 right-0 z-10 flex *:items-center justify-center">
  POPUP

</div> */}

const Home = () => {
  const adjustEarthForScreenSize = () => {
    let screenScale = null; 
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9];
    } else{
      screenScale = [3.2,3.2,3.2];
    }
    return [screenScale,screenPosition, rotation];
  };
  
  const[earthScale, earthPosition, earthRotation] = adjustEarthForScreenSize();

  return (
    <section className= "w-full h-screen relative">
      <Canvas 
      className="w-full h-screen bg-transparent"
      camera={{near: 0.1, far: 1000}}>
      
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor= "#b1e1ff" groundColor="#000000" 
          intensity={1}/>

          <Sky
          />

          <Earth 
          position = {earthPosition}
          scale = {earthScale}
          rotation = {earthRotation}
          />


        </Suspense>
      </Canvas>
    </section>

  )
}

export default Home
