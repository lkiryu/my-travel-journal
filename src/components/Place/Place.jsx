import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './Place.css'

export default function Place(props) {
    return (
        <div className="place">
            <img src={`./src/assets/${props.image}`} alt={props.title} className="place-photo"/>
            <div className="info">
                <span className="location">
                    <FontAwesomeIcon icon={faLocationDot} className="icon"/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer" className="maps-link">View on Google Maps</a>
                </span>
                <h2 className="location-name">{props.title}</h2>
                <span className="dates">
                    {props.startData}
                    -
                    {props.endData}
                </span>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}