import React, {PropTypes} from 'react'

const IconCard = ({color, title, imageFilename}) => {
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <img src={require(`../../images/${imageFilename}`)} alt={`${title} icon`}/>
            <p>{title}</p>
        </div>
    )
};

IconCard.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    imageFilename: PropTypes.string.isRequired
};

export default IconCard;