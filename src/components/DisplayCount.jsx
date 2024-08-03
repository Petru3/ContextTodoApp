// DisplayCount.jsx
import { useCount } from "../Contexts/CountCountext";

function DisplayCount() {
    const { count } = useCount();

    return (
        <div className="display">
            <h1>{count}</h1>
        </div>
    );
}

export default DisplayCount;
