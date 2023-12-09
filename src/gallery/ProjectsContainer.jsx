import { useState } from "react";
import Project from "./Project"
import CompletedProjects from "./CompletedProjects"

export default function ProjectsContainer(){
    //const arr = CompletedProjects;
    const [index, setIndex] = useState();
    return(    
   <>
    <hr className="container mx-auto"></hr>  
        <div className="flex flex-col relative items-center w-3/4 h-1/2">
            <h3 className="h-[10%] pt-2">
                Completed Projects
            </h3>
            <div className="grid grid-cols-3 gap-5 w-[90%] h-[90%]">
                <hr />
                <Project pic={CompletedProjects[1]}/>
            </div>
        </div>
        <button
            // onClick={displayGallery}
            className="expand-btn w-40 h-8 mt-2 text-[white] rounded-full bg-[#34b252] active:scale-105
            hover:text-[#34b525] hover:border-2 hover:border-[#34b525] hover:bg-[white]">
                Show more
        </button>
        <hr className="container mx-auto"></hr>
   </> 
    
    )
}
