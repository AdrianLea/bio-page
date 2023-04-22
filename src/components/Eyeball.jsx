
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react'
import eyeImage from '../images/Untitled.png'
import sleep1 from '../images/sleep1.png'
import sleep2 from '../images/sleep2.png'
import sleep3 from '../images/sleep3.png'


export default function Eyeball() {
  const [phase, setPhase] = useState(sleep3)
  const [angle, setAngle] = useState(0)
  const [distance, setDistance] = useState(0)
  const eyeball = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    const images = [eyeImage,sleep1,sleep2,sleep3]
    images.forEach((image)=>{
      new Image().src = image
    })
  })
  const handleMouseMove = event => {
    let mouseX = event.clientX - 40
    let mouseY = event.clientY - 40
    
    let pos = eyeball.current.getBoundingClientRect()
    let elementX = pos.x
    let elementY = pos.y
    let  dx = elementX - mouseX
    let dy = elementY - mouseY
    if(Math.abs(dy) >=350){
      setPhase(sleep3)
    }
    else if(Math.abs(dy) < 350 && Math.abs(dy) >= 250){
      setPhase(sleep2)
    }
    else if(Math.abs(dy) < 250 && Math.abs(dy) >=150){
      setPhase(sleep1)
    }
    else{
      setPhase(eyeImage)
    }
    setDistance(Math.sqrt((mouseX - elementX)**2 + (mouseY - elementY)**2))
    
    setAngle(Math.atan2(dx,dy) * 180/Math.PI + 180)
    setDistance(Math.sqrt((mouseX - elementX)**2 + (mouseY - elementY)**2))
    
   
    
    

  }
  
  const eyeStyle = {
    transform: `rotate(${-angle}deg)`,
    transition: `all 0s ease`,
    
   
    
    
  }
  
  useEffect(() => {
    document.addEventListener('mousemove',handleMouseMove)
    
    

    return () => {
      document.removeEventListener('mousemove',handleMouseMove)
      
      
    }
  },[])
  console.log(distance)
 
  return (
    <div className="md:h-[12vh] md:w-[12vh] h-[10vh] w-[10vh] flex justify-center" ref={container}>
      <div className="h-[80%] w-[80%] shrink-0 relative z-20 left-[22%] top-[8%] " style={{backgroundImage: `url(${phase})`,backgroundPosition: "center",backgroundSize: "contain", backgroundRepeat:"no-repeat" }}>
        
      </div>
      <div className="h-[40%] w-[40%] bg-white rounded-full relative top-[31%] right-[37%] shrink-0" ref={eyeball} style={eyeStyle}>
        <div className="h-[50%] w-[50%] bg-black rounded-full relative left-[25%] top-[35%] shrink-0 ">
        
        </div>
      </div>
    </div>
  )
}

