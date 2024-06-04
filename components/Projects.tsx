'use client'
import { SectionWrapper } from "@/hoc/SectionWrapper"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"
import { gridItems } from "@/data"
import { motion } from "framer-motion"
import { textVariant } from "@/utils/motions"

const Projects = () => {
  return (
    <motion.div variants={textVariant()}>
      <div className="sm:ml-[50px] relative text-3xl flex flex-col my-5 h-full sm:h-screen">
        <h1 className="text-[36px] font-bold text-color-5 text-left sm:pl-[60px] sm:pt-[60px] font-wenkai">Projects</h1>
        <BentoGrid className="mt-10 sm:px-10">
            {gridItems.map((item) => (
                <BentoGridItem key={item.id} className="bg-white border-black-100" title={item.title} description={item.description} icons={item.tech ?? []} buttonText={item.buttonText} link={item.link} date={item.date} />
                
            ))}
        </BentoGrid>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Projects, 'projects')