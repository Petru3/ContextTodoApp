// IncrementButton.jsx
import { useCount } from "../Contexts/CountCountext";
import Button from "../shared/Button";

function IncrementButton() {
    const { handleIncrement } = useCount();

    return (
        <Button 
            handleFunction={handleIncrement}
            textDisplay="+"
        />
    );
}

export default IncrementButton;
