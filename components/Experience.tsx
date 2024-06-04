'use client'
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { expItems } from "@/data";
import { SectionWrapper } from "@/hoc/SectionWrapper";
import 'react-vertical-timeline-component/style.min.css';
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motions";
import Link from "next/link";

const Experience = () => {


  return (
      <>
      <motion.div variants={textVariant()} className="relative text-3xl flex flex-col mt-1">
        <div className="sm:ml-[50px] mb-10">
          <h1 className="text-[36px] font-bold text-color-5 text-left sm:pl-[60px] sm:pt-[80px] font-wenkai">Experience</h1>
          
          {/* <div className="w-full border"> */}

          {/* </div> */}
        </div>
          

          <VerticalTimeline lineColor="rgb(64, 64, 64)">
            {
              expItems.map((item) => (
                <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--work"
                contentStyle={ { background: 'rgba(255, 255, 255, 0.5)', color: 'rgb(64, 64, 64)', borderRadius: '20px', border: '1px solid' }}
                contentArrowStyle={{ display: 'none'}}
                date={`${item.from} - ${item.to}`}
                visible={true}
                iconStyle={{ background: 'rgb(64, 64, 64)', color: '#FFF' }}
                icon={item.type? <MdWork />: <IoSchool/>}
              >
                <h3 className="vertical-timeline-element-title font-sans text-2xl font-bold">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle font-sans text-base opacity-80">{item.subtitle}</h4>

                <ul className="text-sm list-disc pt-2">
                  {item.description.map((x: string, index) => <li key={index} className="p-1">{x}</li>)}
                  
                </ul>
                <div className="my-1">
                  <Link href={item.link} target="_blank">
                  <button className="px-4 py-1 rounded-md border border-color-5 bg-color-4 text-color-5 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    Link
                  </button>
                  </Link>
                </div>
              </VerticalTimelineElement>
              ))
          }
            
          </VerticalTimeline>
        </motion.div>
      </>
  )
}

export default SectionWrapper(Experience, "exp");
