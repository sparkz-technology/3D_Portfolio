import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'

import Loader from '../components/Loader'
import { Bird, Island, Plane, Sky } from '../models'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState<number | null>(1)
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    const currentAudioRef = audioRef.current
    if (isPlaying) currentAudioRef.play()
    return () => currentAudioRef.pause()
  }, [isPlaying])
  // ? Adjust the island for screen size
  const adjustIslandForScreenSize = () => {
    let screenScale: number[] = [1, 1, 1]
    let screenPosition: number[] = [0, -6.5, -43]
    const screenRotation: number[] = [0.1, 4.7, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
      screenPosition = [0, -6.5, -43.4]
    } else {
      screenScale = [1, 1, 1]
      screenPosition = [0, -6.5, -43.4]
    }

    return { screenScale, screenPosition, screenRotation }
  }

  const { screenScale, screenPosition, screenRotation } =
    adjustIslandForScreenSize()
  // ? Adjust the plane for screen size

  const adjustPlaneForScreenSize = () => {
    let planeScale: number[]
    let planePosition: number[]
    if (window.innerWidth < 768) {
      planeScale = [1.5, 1.5, 1.5]
      planePosition = [0, -1.5, 0]
    } else {
      planeScale = [3, 3, 3]
      planePosition = [0, -4, -4]
    }
    return { planeScale, planePosition }
  }
  const { planeScale, planePosition } = adjustPlaneForScreenSize()
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            groundColor="#000000"
            // skyColor="#b1e1ff"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={screenRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            rotation={[0, 20, 0]}
            scale={planeScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={isPlaying ? soundon : soundoff}
          alt={isPlaying ? 'sound on' : 'sound off'}
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </section>
  )
}

export default Home
