import { Section } from './Section';

export function ContactMe() {

    return (
        <Section title={"Contact me"}>
            <div className='container mx-auto px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='col-span-1'>Social media limks</div>
                    <div className='col-span-1'>Personal public info</div>
                </div>
            </div>
        </Section>
    );
}