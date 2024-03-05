import React from 'react';
import * as projects from '../images';

export default function Project({ project: { title, image, link, githubLink } }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className='image-container'>
                <img src={projects[image]} alt={title} />
            </div>
            {link && <a href={link} className='link'>Project Link</a>}
            {githubLink && <a href={githubLink} className='link'>GitHub Link</a>}
        </div>
    );
}
