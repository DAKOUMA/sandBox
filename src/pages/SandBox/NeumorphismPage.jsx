import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../components/NavBar'

import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NeumorphismPage = () => {

  const Neumorphism = () => {
    const nameRef = useRef(null)
    const card_3Ref = useRef(null)
    const card_4Ref = useRef(null)

    const button_1Ref = useRef(null)
    const button_1Ref_container = useRef(null)
    const button_2Ref = useRef(null)
    const button_2Ref_container = useRef(null)
    const button_3Ref = useRef(null)
    const button_3Ref_container = useRef(null)
    const inputName = nameRef.current

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [enter, setEnter] = useState({ hover: false, button: 0 })
    const [isDrag, setIsDrag] = useState(false)

    const handleMouseEnter = () => {
      card_3Ref.current.classList.add('mouseIn')
      if (card_3Ref.current.classList.contains('mouseOut')) {
        card_3Ref.current.classList.remove('mouseOut')
      }
    }

    const handleMouseLeave = () => {
      card_3Ref.current.classList.add('mouseOut')
      if (card_3Ref.current.classList.contains('mouseIn')) {
        card_3Ref.current.classList.remove('mouseIn')
      }
    }

    const handleMouseEnterMini = () => {
      card_4Ref.current.classList.add('mouseIn-mini')
      if (card_4Ref.current.classList.contains('mouseOut-mini')) {
        card_4Ref.current.classList.remove('mouseOut-mini')
      }
    }

    const handleMouseLeaveMini = () => {
      card_4Ref.current.classList.add('mouseOut-mini')
      if (card_4Ref.current.classList.contains('mouseIn-mini')) {
        card_4Ref.current.classList.remove('mouseIn-mini')
      }
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }


    const handleMouseCalcucle = () => {
      if (position.x !== 0 && enter.hover === true) {
        let containerRef;
        let buttonRef;

        switch (enter.button) {
          case 1:
            containerRef = button_1Ref_container;
            buttonRef = button_1Ref
            break;
          case 2:
            containerRef = button_2Ref_container;
            buttonRef = button_2Ref
            break;
          case 3:
            containerRef = button_3Ref_container;
            buttonRef = button_3Ref
            break;
          default:
            break;
        }
       if (containerRef && buttonRef) {
        const rectButtonContainer = containerRef.current.getBoundingClientRect();

        const mousePositionX = Math.floor(((position.x - rectButtonContainer.left) / rectButtonContainer.width * 200) - 100);
        const mousePositionY = Math.floor(((position.y - rectButtonContainer.top) / rectButtonContainer.height * 200) - 100);

        buttonRef.current.style.setProperty('--mouseX', mousePositionX + '%')
        buttonRef.current.style.setProperty('--mouseY', mousePositionY + '%')
       }
      }

    }

    const handleMouseCalcucleEnter = (button) => {
      setEnter({ hover: true, button: button })
    }

    const handleMouseCalcucleLeave = () => {
      setEnter({ hover: false, button: 0 })
      let buttonRef;

        switch (enter.button) {
          case 1:
            buttonRef = button_1Ref
            break;
          case 2:
            buttonRef = button_2Ref
            break;
          case 3:
            buttonRef = button_3Ref
            break;
          default:
        }

      buttonRef.current.style.setProperty('--mouseX', 0 + '%')
      buttonRef.current.style.setProperty('--mouseY', 0 + '%')
    }

    const handleMouseDrag = () => {
      isDrag ? () => {setIsDrag(false);} : setIsDrag(true)
    }

    const handleMouseDragAction = () => {
      if (isDrag) {
        button_2Ref.current.style.setProperty('--mouseX', 50 + '%')
        button_2Ref.current.style.setProperty('--mouseY', 50 + '%')
      }
    }

    useEffect(() => {
      handleMouseCalcucle()
      handleMouseDragAction()
    }, [position])




    return (
      <div className='neumorphismContainer'>
        <div className='neumorphismContainer-card w-2/3 sm:w-1/2 h-96 mx-auto rounded-3xl grid grid-cols-2 grid-rows-2 items-center'>
          <div className='neumorphismContainer-card_1 w-24 h-24 sm:w-40 mx-auto rounded-2xl'></div>
          <div className='neumorphismContainer-card_2 w-24 h-24 sm:w-40 mx-auto rounded-2xl'></div>
          <div className='neumorphismContainer-card_3 w-24 h-24 sm:w-40 mx-auto rounded-2xl'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={card_3Ref}
          >
          </div>
          <div className='neumorphismContainer-card_4 w-24 h-24 sm:w-40 mx-auto rounded-2xl flex flex-row items-center relative'
            onMouseEnter={handleMouseEnterMini}
            onMouseLeave={handleMouseLeaveMini}
            ref={card_4Ref}
          >
            <div className='neumorphismContainer-card_4_mini mini-1 w-20 h-20 sm:w-36 rounded-2xl absolute'></div>
            <div className='neumorphismContainer-card_4_mini mini-3 w-16 h-16 sm:w-32 rounded-2xl absolute'></div>
            <div className='neumorphismContainer-card_4_mini mini-2 w-12 h-12 sm:w-28 rounded-2xl absolute'></div>
            <div className='neumorphismContainer-card_4_mini mini-4 w-8 h-8 sm:w-24 rounded-2xl absolute'></div>
          </div>
        </div>
        <div className='neumorphismContainer-button w-2/3 flex flex-row justify-around mt-10 py-10 mx-auto'>
          <div
            className=' rounded-full flex items-center bg-purple-200 gravityZone'
            ref={button_1Ref_container}
            onMouseEnter={() => handleMouseCalcucleEnter(1)}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => handleMouseCalcucleLeave(1)}
          >
            <button
              className='neumorphismContainer-button_1 w-20 h-20 text-white rounded-full mx-auto'
              ref={button_1Ref}
            >
              <span>
              Click
              </span>
            </button>
          </div>
        </div>
        <form action="#">
          <label htmlFor="name">name: </label>
          <input
            type="text"
            placeholder='your name'
            name='name'
            id='name'
            ref={nameRef} />
        </form>
      </div>
    )
  }


  return (
    <div className='pageContainer'>
      <NavBar />
      <Link
        className='flex flex-col w-fit'
        to='/Sandbox'>
        <IoReturnUpBackSharp className='arrowBack' size={'2rem'} />
      </Link>
      <Neumorphism />
    </div>
  )
}

export default NeumorphismPage