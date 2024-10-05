import { Section } from './Section';

export function AboutMe() {

    return (
        <Section title={"about me"}>
            <div className='container'>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
                    <div className="flex justify-center items-center col-span-1">Photo</div>
                    <div className="flex justify-center items-center col-span-1">Desc</div>
                </div>
            </div>

        </Section>
    );
}