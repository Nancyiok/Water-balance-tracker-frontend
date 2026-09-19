import {useFormContext} from "react-hook-form";
import type {ReactNode} from "react";

type Props = {
    header: string;
    onSubmit: () => void,
    children: ReactNode
}

function Form({header, onSubmit, children = null}: Props) {
    const {handleSubmit} = useFormContext();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {header ? <h1>{header}</h1> : null}
            <div>{children}</div>
        </form>
    );
}

export default Form;
