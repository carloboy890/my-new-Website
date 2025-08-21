    import React, {useState} from "react";

    const SkillMDcard = (props) => {
        return (
            <div className="max-md:flex max-md:w-2/3 ml-30 items-center max-md:justify-around h-20">
                <div><img className="w-20 max-md:w-12 max-md:h-10" src={props.logo} alt={props.tool} /></div>
                <div className="mt-3 w-30 text-red h-10 w-10 ml-5">{props.tool}</div>
                <div className="mt-4 w-2/4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: props.percentage}}></div>
                </div>
                <div className="ml-5">{props.percentage}</div>
            </div>
        )
    }

    export default SkillMDcard;