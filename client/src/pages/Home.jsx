import React from "react";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    const projects = [
        {
            title: 'Surf Report', 
            image: 'surfReport',
            link: 'https://jman2476.github.io/project_wave_weather/',
            githubLink: 'https://github.com/jman2476/project_wave_weather'
        }, 
        {
            title: 'InstalLasagna',
            image: 'instalLasagna',
            link: 'https://lasagna-vr6a.onrender.com/',
            githubLink: 'https://github.com/jman2476/instalLasagna'
        }, 
        {
            title: 'Project 3',
            image: 'working',
            link: 'City Reviewer',
            githubLink: ''
        }
    ];

    return (
        <section>
            <h1 className="text-center">PROJECTS</h1>
            <div className="text-center project-btn">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
