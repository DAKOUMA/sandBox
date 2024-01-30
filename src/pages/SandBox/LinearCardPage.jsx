import React, { useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'

import { logo, photos } from '../../images/Images'
import NavBar from '../../components/NavBar'

import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const LinearCardPage = () => {
    const LinearCard = () => {
        const [position, setPosition] = useState({ x: 0, y: 0 })

        const motionDivElementRef = useRef(null)
        const divElement = motionDivElementRef.current


        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        };


        const mouseCalcule = () => {
            const rect = divElement.getBoundingClientRect();
            const mouseX = position.x - rect.left;
            const mouseY = position.y - rect.top;

            const mouseXPercentage = ((mouseY / rect.width) - 0.5) * 20;
            const mouseYPercentage = ((mouseX / rect.width) - 0.5) * -20;

            const radialXPercentage = ((mouseX / rect.width)) * 100;
            const radialYPercentage = ((mouseY / rect.width)) * 100;

            divElement.style.setProperty('--x', mouseXPercentage + 'deg');
            divElement.style.setProperty('--y', mouseYPercentage + 'deg');

            divElement.style.setProperty('--c', (mouseXPercentage / 5) + 'px');
            divElement.style.setProperty('--d', (mouseYPercentage / 5) + 'px');

            divElement.style.setProperty('--a', radialXPercentage + '%');
            divElement.style.setProperty('--b', radialYPercentage + '%');
        }

        useEffect(() => {

            if (divElement) {
                mouseCalcule()
            }
        }, [position])


        return (
            <div className='py-10'
            >
                <div
                    className='scale rotateDiv w-60 h-80 mx-auto py-1 bg-slate-800  motion-div rounded-3xl shadow-slate-500 shadow-xl text-center '
                    onMouseMove={handleMouseMove}
                    ref={motionDivElementRef}
                >
                    <img className='w-16 absolute' src={logo} alt="" />
                    <img className='w-52 mx-auto mt-6' src={photos} alt="" />
                    <h1 className='text-xl font-bold'>RAMERISON ANSELME</h1>
                    <p className=''>Front-End Devloper</p>
                    <p>React.js</p>
                </div>
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
            <LinearCard />
        </div>
    )

}

export default LinearCardPage