export function Title({ text }) {

    const uperCaseTitle = text.toUpperCase();

    return (
        <div className="my-8 2xl:my-24">
            <div className="relative flex justify-center items-center ">
                <h1 className="absolute text-4xl xl-text-7xl 2xl:text-9xl opacity-15 z-0">
                    {uperCaseTitle}
                </h1>
                <h1 id={text} className="relative text-base xl:text-2xl 2xl:text-5xl text-banana z-10">
                    {uperCaseTitle}
                </h1>
            </div>
        </div>
    );
}
