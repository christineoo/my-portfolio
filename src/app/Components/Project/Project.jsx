import React, {PropTypes} from 'react'
import Button from '../Button';
import shortid from 'shortid';

const Project = ({data, i, reverse}) => {
    const colors = ["#b81431", "#66c577", "#14aeb8", "#523375", "#ee710d"];

    const githubRepoBtn = data.links.github !== "" ? <Button hrefLink={data.links.github}>Github Repo</Button> : null;
    const demoBtn = data.links.demo !== "" ? <Button hrefLink={data.links.demo}>Live Demo</Button> : null;

    return (
        <section className={`project ${reverse}`} style={{ backgroundColor: colors[i]}}>
            <img src={`${data.screenshotUrl}`}/>
            <div className="section-description" >
                <h1>{data.title}</h1>
                {githubRepoBtn}
                {demoBtn}
                <p>{data.description}</p>
                <ul>
                    {data.technology.map((t) => {
                        return <li key={shortid.generate()}>{t}</li>
                    })}
                </ul>
            </div>
        </section>
    )
};

Project.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technology: PropTypes.array.isRequired,
        screenshotUrl: PropTypes.string.isRequired,
        links: PropTypes.object
    }).isRequired
};

export default Project;