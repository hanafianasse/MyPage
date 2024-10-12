export function Title({ text }) {

    const uperCaseTitle = text.toUpperCase();

    return (
        <div className="py-2 relative flex justify-center items-center">
            <h1 className="absolute text-5xl xl-text-7xl 2xl:text-9xl opacity-15">
                {uperCaseTitle}
            </h1>
            <h1 id={text} className="my-12 2xl:my-24 text-base xl:text-2xl 2xl:text-5xl text-banana">
                {uperCaseTitle}
            </h1>
        </div>
    );
}
