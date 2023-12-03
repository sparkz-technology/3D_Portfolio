import React from 'react'
import { Link } from 'react-router-dom'
// @ts-ignore
import { arrow } from '../assets/icons'
import { IHomeInfo } from '../types'

const InfoBox: React.FC<{
  heading: string
  linkTo: string
  buttonText: string
}> = ({ heading, linkTo, buttonText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{heading}</p>
    <Link to={linkTo} className="neo-brutalism-white neo-btn">
      {buttonText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const stages = [
  {
    stage: 1,
    content: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Sutharsan</span>
        👋
        <br />A Web Developer from Chennai, India
      </h1>
    ),
  },
  {
    stage: 2,
    content: (
      <InfoBox
        heading="I've been coding for over 1 years and have developed a wide range of skills"
        linkTo="/about"
        buttonText="Learn more"
      />
    ),
  },
  {
    stage: 3,
    content: (
      <InfoBox
        heading="I've developed a wide range of projects from small websites to full-blown web apps"
        linkTo="/projects"
        buttonText="Visit my portfolio"
      />
    ),
  },
  {
    stage: 4,
    content: (
      <InfoBox
        heading="Need a project done or looking for a dev? I'm just a few keystrokes away"
        linkTo="/contact"
        buttonText="Let's connect"
      />
    ),
  },
]

const HomeInfo: React.FC<IHomeInfo> = ({ currentStage }) => {
  const selectedStage = stages.find((info) => info.stage === currentStage)

  return selectedStage ? selectedStage.content : null
}

export default HomeInfo
