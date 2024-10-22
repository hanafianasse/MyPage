import { Section } from './Section';

export function ContactMe() {

    return (
        <>
            <Section title={"Contact me"}>
                <div className='container mx-auto px-4'>
                    <div className='bg-[#1F1F1F] shadow-md rounded-lg p-4'>
                        <p className="mb-6">Feel free to reach out</p>
                        <form action="#" method="POST" className="space-y-4">
                            <div>
                                <label for="name" className="block font-medium">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full p-2 bg-[#313131] focus:outline-none border border-[#595959] rounded-sm" required />
                            </div>
                            <div>
                                <label for="email" className="block font-medium">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full p-2 bg-[#313131] focus:outline-none border border-[#595959] rounded-sm" required />
                            </div>
                            <div>
                                <label for="message" className="block font-medium">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full p-2 bg-[#313131] focus:outline-none border border-[#595959] rounded-sm" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="bg-[#faa908] text-white px-4 py-2 rounded-md hover:bg-[#906c25] transition">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}