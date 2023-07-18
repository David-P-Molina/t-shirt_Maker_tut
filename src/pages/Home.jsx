import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import CustomButton from '../components'

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'


const Home = () => {
    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header>
                    <img 
                        src='./threejs.png' 
                        alt='logo' 
                        className="w-8 h-8 object-contain"/>
                </motion.header>
                <motion.div className = "home-content" {...headContainerAnimation}>
                    <h1 className="head-test">
                        Let's <br className="xl:block hidden"/> Do It!
                    </h1>
                </motion.div>
                <motion.div>
                    <p className='max-w-md font-normal text-gray-600 text-base'>
                        Create your unique and exclusive shirt with our brand new 3d Customization tool.
                        <strong>Unleash your imagination</strong> {" "} and define your own style.
                    </p>
                    <CustomButton />
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home