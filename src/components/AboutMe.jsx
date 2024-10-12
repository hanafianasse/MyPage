import { Section } from './Section';
import anasse from './../assets/anasse.jpg';

export function AboutMe() {

    const bio = "I am a software engineer and PhD researcher specializing in IT and artificial intelligence, with a focus on augmented reality. With 7 years of experience in web development, I have honed my skills in creating innovative solutions while leading teams using Scrum methodologies. My expertise lies in both technical implementation and team management, driving projects from concept to completion with a strong emphasis on quality and collaboration.";

    return (
        <Section title={"about me"}>
            <div className='container mx-auto px-4'>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="flex justify-center items-center col-span-1">
                        <img
                            src={anasse} alt="selfi d'anasse"
                            className="w-full opacity-80"
                        />
                    </div>
                    <div className="flex justify-center items-center col-span-1">
                        <div className="w-full text-center xl:text-xl 2xl:text-4xl">
                            {bio}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}