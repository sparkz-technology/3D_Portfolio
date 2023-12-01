import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island'
import { Vector3 } from 'three'

const Home: React.FC = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale: Vector3 = new Vector3(1, 1, 1)
    let screenPosition: Vector3 = new Vector3(0, -6.5, -43)
    if (window.innerWidth < 768) {
      screenScale.set(0.9, 0.9, 0.9)
    }
    return { screenScale, screenPosition }
  }

  const { screenScale, screenPosition } = adjustIslandForScreenSize()
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent "
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Island position={screenPosition} scale={screenScale} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
