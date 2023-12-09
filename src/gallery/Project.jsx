import React from "react"
import CompletedProjects from "./CompletedProjects"
import ProjectsContainer from "./ProjectsContainer"


//project body.
function Project ({pic}){
            
    return(
            
        <section className="h-full shadow-md hover:shadow-lg rounded-md">
            <div className="w-full h-1/2">
                <p>Some</p>
                <img
                    id="image"
                    src={pic.img}
                    alt="images"
                    className="w-full h-full rounded-t-md"
                />
            </div>
            <div className="flex flex-col items-center w-full h-1/2">
                <h4 
                    id="heading"
                    className="text-center my-2 w-2/3"
                >
    
                </h4>
                <p 
                    id="overview"
                    className="mx-2"
                >
                    
                    <span className="text-sm text-[#3ec75e] hover:underline">
                        <a href="#"> ...Read more.</a>
                    </span>
                </p>
            </div>
        </section>
        );
}
export default Project;