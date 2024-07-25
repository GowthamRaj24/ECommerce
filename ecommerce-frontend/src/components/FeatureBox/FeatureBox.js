import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import "./FeatureBox.css";

const FeatureBox = ({ icon, heading, text }) => {
    return (
        <>
        <div className='a'>
            <div className="a-box">
                <div className="a-icon">
                    <FontAwesomeIcon icon={icon} size='3x' style={{color: "#8bc34a"}}/>
                </div>
                <div className="a-text">
                    <div className="a-heading">{heading}</div>
                    <div className="a-text">{text}</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FeatureBox;