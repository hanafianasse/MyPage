import { Section } from './Section';
import { SkilCard } from './SkilCard';
import { AiFillCode } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa6";
import { DiScrum } from "react-icons/di";
import { TbAugmentedReality } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import useBreakpoint from './../hooks/BreakPoint';
import { getIconSize } from "./../util";
import Slider from "./Slider";

export function Skils() {

    const breakpoint = useBreakpoint();
    const iconSize = getIconSize(breakpoint);

    const skills = [
        { id: 1, label: "Programming Languages", icon: <AiFillCode size={iconSize} />, text: "Proficient in JavaScript, Python, C++, and TypeScript" },
        { id: 2, label: "Web Development", icon: <BiCodeAlt size={iconSize} />, text: "Expertise in React, Tailwind CSS, Node.js, and Next.js" },
        { id: 3, label: "Artificial Intelligence", icon: <LuBrainCircuit size={iconSize} />, text: "Experience with machine learning algorithms, neural networks, and AI frameworks" },
        { id: 4, label: "Augmented Reality", icon: <TbAugmentedReality size={iconSize} />, text: "Specialization in AR development, including Unity and ARKit" },
        { id: 5, label: "Agile & Scrum", icon: <DiScrum size={iconSize} />, text: "Strong experience in Scrum methodology, sprint planning, and team management" },
        { id: 6, label: "Database Management", icon: <FaDatabase size={iconSize} />, text: "Knowledge in SQL, NoSQL, MongoDB, and database optimization" }
    ];

    return (
        <Section title={"skils"}>
            {breakpoint == "xs" || breakpoint == "smmm" ?
                <Slider>
                    {skills.map(skil => (
                        <SkilCard key={skil.id} label={skil.label} text={skil.text} icon={skil.icon} />
                    ))}
                </Slider>
                :
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-10 xl:mx-0 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 xl:gap-10 justify-items-center">
                        {skills.map(skil => (
                            <SkilCard key={skil.id} label={skil.label} text={skil.text} icon={skil.icon} />
                        ))}
                    </div>
                </div>

            }
        </Section>
    );
}