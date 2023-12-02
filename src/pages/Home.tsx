import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Loader from '../components/Loader'
import { Island } from '../models'

const Home: React.FC = () => {
  const adjustIslandForScreenSize = () => {
    // let screenScale: Vector3 = new Vector3(1, 1, 1)
    // let screenPosition: Vector3 = new Vector3(0, -6.5, -43)
    // let screenRotation: Vector3 = new Vector3(0.1, 4.7, 0)
    // convert vector3 to array
    let screenScale: number[] = [1, 1, 1]
    let screenPosition: number[] = [0, -6.5, -43]
    let screenRotation: number[] = [0.1, 4.7, 0]
    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5]
    }
    return { screenScale, screenPosition, screenRotation }
  }

  const { screenScale, screenPosition, screenRotation } =
    adjustIslandForScreenSize()
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent "
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
          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={screenRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
