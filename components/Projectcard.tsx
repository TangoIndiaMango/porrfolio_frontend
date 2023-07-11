"use client"
import { GearSvg, LinkArrowSvg } from '@/components/svgs'
import { useState } from 'react'
import { projectType } from '@/utils/types'

const ProjectCard = ({ project }: { project: projectType }) => {

    const [showTool, setShowTool] = useState(false)

    return (
        <div className="main-content">
            <div className="project-card" style={{ backgroundImage: `url('${project.cover}')` }}>
                <div className="bottomContent">
                    <a href={project.link} target="_blank" className='link' rel="noreferrer">
                        <LinkArrowSvg />
                    </a>
                    <div className="gear" onClick={() => setShowTool(!showTool)}>
                        <GearSvg />
                    </div>
                </div>
            </div>
            <div className="topContent">
                <div className="titleSection">
                    <h3>{project.title}</h3>
                    <div className="project-context" dangerouslySetInnerHTML={{ __html: project.about }}></div>
                </div>
            </div>


            {
                showTool && <div className="tools">
                    <h4>Tool Used</h4>
                    <ul>
                        {project.tool.map((item, i) => <li key={i}>{item.name}</li>)}
                    </ul>
                </div>
            }
        </div >

    )
}

export default ProjectCard;