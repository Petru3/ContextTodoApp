// DecrementButton.jsx
import { useCount } from "../Contexts/CountCountext";
import Button from "../shared/Button";

function DecrementButton() {
    const { handleDecrement } = useCount();

    return (
        <Button 
            handleFunction={handleDecrement}
            textDisplay="-"
        />
    );
}

export default DecrementButton;
