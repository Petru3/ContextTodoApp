
import PropTypes from 'prop-types'

export default function Button({classNamed, handleFunction, textDisplay}) {
     
    return (
        <button 
            className={classNamed} 
            onClick={handleFunction}
        >
            {textDisplay}
        </button>
    )
}

Button.propTypes = {
    classNamed: PropTypes.string.isRequired,
    handleFunction: PropTypes.func.isRequired,
    textDisplay: PropTypes.string.isRequired
};