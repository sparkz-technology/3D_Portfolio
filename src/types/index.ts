export type IIsland = {
  position: number[] | any
  scale: number[] | any
  rotation: number[] | any
  isRotating: boolean
  setIsRotating: (isRotating: boolean) => void
  setCurrentStage: (currentStage: number | null) => void
}

export type IPlane = {
  position: number[] | any
  scale: number[] | any
  rotation: number[] | any
  isRotating: boolean
  setIsRotating: (isRotating: boolean) => void
}

export type IHomeInfo = {
  currentStage: number
}
