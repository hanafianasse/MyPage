import icySummitMountain from "../assets/icy-summit-of-a-mountain-on-a-frosty-night.jpg";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiScopus } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";

import useBreakpoint from "./../hooks/BreakPoint";
import { getIconSize } from "./../util";

export function Header() {

    const breakpoint = useBreakpoint();
    const iconSize = getIconSize(breakpoint);

    return <>
        <div className="relative flex justify-center items-center w-full h-[300px] sm:h-[400px] lg:h-[550px] 2xl:h-[600px]">
            <img
                src={icySummitMountain} alt="Icy summit of a mountain on a frosty night"
                className="w-full h-full object-cover opacity-50"
            />
            <div className="container mx-auto px-4 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center flex-col text-center">
                <h1 className="font-bold md:text-[28px] lg:text-[40px] 2xl:text-[60px]">Hi, I am <span className="text-banana">Anasse HANAFI</span></h1>
                <p className="container md:text-[16px] lg:text-[25px] 2xl:text-[40px]">Software engineer and PhD researcher specializing in IT and artificial intelligence</p>
                <div className="mt-4 flex justify-between">
                    <div className="mx-2"><BsLinkedin size={iconSize} /></div>
                    <div className="mx-2"><SiScopus size={iconSize} /></div>
                    <div className="mx-2"><IoLogoInstagram size={iconSize} /></div>
                    <div className="mx-2"><BsGithub size={iconSize} /></div>
                </div>
            </div>
        </div>
    </>
}