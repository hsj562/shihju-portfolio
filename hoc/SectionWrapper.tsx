import { staggerContainer } from "@/utils/motions"
import { motion } from "framer-motion"
import { ComponentType, FunctionComponent } from "react"


export const SectionWrapper = (Component: React.FC, idName: string) => 
  function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount:0.25 }}
            className="sm:px-16 px-6 sm:pt-12 py-10 relative"
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>    
    )
}
