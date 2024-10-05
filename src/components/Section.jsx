import { Title } from "./Title";

export function Section({ title, children }) {

    return (
        <div className="w-full">
            <Title text={title} />
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}