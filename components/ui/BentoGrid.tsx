import { cn } from "@/utils/cn";
import { FaSwift, FaNodeJs, FaAws, FaReact } from "react-icons/fa";
import { SiMongodb, SiCplusplus, SiC } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";


import Link from "next/link";

const techs = ['Javascript', 'Swift', 'React', 'Node.js', 'MongoDB', 'AWS', 'GCP', 'CPP' ]
const iconMap = [<IoLogoJavascript key={0} />,  <FaSwift key={0}/>,  <FaReact key={0}/>, <FaNodeJs key={0}/>, <SiMongodb key={0}/>, <FaAws key={0}/>, <DiGoogleCloudPlatform  key={0}/>, <SiCplusplus key={0}/>]

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-2 gap-4 md:max-w-7xl max-w-xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icons,
  buttonText,
  date,
  link
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icons?: string[];
  buttonText?: string;
  link?: string;
  date?: string;

}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-5  bg-white border border-transparent justify-between flex flex-col space-y-4 bg-opacity-70",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-color-5 mb-1 mt-2 text-xl">
          {title}
        </div>
        <div className="font-sans text-color-5 text-sm mb-2 opacity-70">
          {date}
        </div>
        <div className="font-sans font-normal text-color-5 opacity-80 text-sm">
          {description}
        </div>
        <div className="flex w-full text-color-5 text-[30px] gap-2 mt-3">
        {icons?.map((tech, index) => 
          <div key={index} className="py-2">{iconMap[techs.indexOf(tech)]}</div>
        )}
        </div>
        { link ? <Link href={link} target="_blank">
          <button className="mt-3 px-4 py-1 rounded-md border border-color-5 bg-color-4 text-color-5 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
            {buttonText}
          </button>
        </Link> : null}
      </div>
    </div>
  );
};
