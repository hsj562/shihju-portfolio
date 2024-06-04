'use client'

import { SectionWrapper } from "@/hoc/SectionWrapper"
import { motion } from "framer-motion"
import { textVariant } from "@/utils/motions"

const Skills = () => {
  return (
    <motion.div variants={textVariant()} className="w-full relative flex flex-col my-5">
        <div className="w-full sm:h-screen h-full flex flex-col sm:ml-[50px]">
            <h1 className="text-[36px] font-bold text-color-5 text-left sm:pl-[60px] sm:pt-[80px] font-wenkai">Skills</h1>
            <div className="flex justify-evenly flex-col sm:flex-row gap-5 mt-12">
                <div className="">
                    <h1 className="font-sans font-bold text-lg text-center text-gray-400">
                        Languages
                    </h1>
                    <div className="grid sm:grid-cols-2 grid-cols-4 gap-5">
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=python" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Python</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=cpp" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">C++</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=javascript" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">JavaScript</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=typescript" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">TypeScript</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=html" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">HTML</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=css" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">CSS</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=java" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Java</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=swift" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Swift</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h1 className="font-sans font-bold text-lg text-center text-gray-400">
                        Frameworks & Libraries
                    </h1>
                    <div className="grid sm:grid-cols-2 grid-cols-4 gap-5">
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=react" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">React</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=bootstrap" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Bootstrap</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=tailwind" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Tailwind CSS</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=express" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Express.js</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=nodejs" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Node.js</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=nextjs" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Next.js</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=flask" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Flask</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=pytorch" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">PyTorch</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-sans font-bold text-lg text-center text-gray-400">
                        Others
                    </h1>
                    <div className="grid sm:grid-cols-2 grid-cols-4 gap-5">
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=git" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Git</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=linux" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Linux</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=docker" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Docker</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=bash" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">Shell Script</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=aws" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">AWS</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=gcp" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">GCP</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=mongodb" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">MongoDB</p>
                        </div>
                        <div className="mt-5 flex flex-col items-center">
                            <img src="https://skillicons.dev/icons?i=mysql" className="max-w-12 max-h-12"/>
                            <p className="font-sans mt-2">MySQL</p>
                        </div>
                    </div>
                </div>
                

            </div>
            
        </div>
    </motion.div>
  )
}

export default SectionWrapper(Skills, "skills")