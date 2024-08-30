import { Input } from "./input";

const NumericInput = ({ className, ...props }) => {
    const handleInput = (event) => {
        // Replace any non-numeric characters with an empty string
        event.target.value = event.target.value.replace(/[^0-9.]/g, '');
    };

    return (
        <Input
            onInput={handleInput}
            {...props}
        />
    );
};

export default NumericInput;
