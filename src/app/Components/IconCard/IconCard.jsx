import React, {PropTypes} from 'react'

const Project = ({color, title, imageFilename}) => {
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <img src={require(`../../images/${imageFilename}`)} alt={`${title} icon`}/>
            <p>{title}</p>
        </div>
    )
};

Project.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    imageFilename: PropTypes.string.isRequired
};

export default Project;