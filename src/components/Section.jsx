import { Title } from "./Title";

export function Section({ title, children }) {

    return (
        <>
            <Title text={title} />
            {children}
        </>
    );
}