"use client"
import { useEffect, useState } from "react";

export interface ExperiencePathProps {
    isFlip?: boolean;
    isClosed?: boolean;
    title: string
    position: string
    cover: string
    spaceTop?: number
    activities: string[]
    startDate: string
    endDate: string
}

const ExperiencePath = ({ isFlip, isClosed, title, position, cover, spaceTop = 20, activities, startDate, endDate }: ExperiencePathProps) => {


    return (<>

        <div className="pathContainer" >
            <div className="c-logo" style={{ backgroundImage: `url('${cover}')` }}></div>
            <div className="path">
                <div className="headerPath">
                    <div className="title">{title}</div>
                    <p>{position}</p>
                </div>
                <ul className="contextPath">
                    {activities.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <div className="cover">
                    <div className="dateShower">
                        <div className="start">{startDate}</div>
                        <div className="end">{endDate}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default ExperiencePath