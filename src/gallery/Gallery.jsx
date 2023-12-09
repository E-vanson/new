import ReactDOM from "react-dom"
import React from "react"
import CompletedProjects from "./CompletedProjects"
import Project from "./Project"
import ProjectsContainer from "./ProjectsContainer"

export default function Gallery(){    

    // const [projects, setProjects] = React.useState(Project)
    //const [comProjects, setComProjects] = React.useState(CompletedProjects)

    console.log("running...")

    const allProjects = []

    const displayGallery  = ()=>{
        
        // while(allProjects.length < 5){
        //     for(let i = 0; i < allProjects.length; i++){
        //         allProjects.push(project)
        //     }
        // }
    }

    //     console.log(allProjects)

    //     return allProjects
    // }
{/* <h1>Testing</h1> */}

    


    // Projects Container.
    // const projectsContainer = (
        
    //     <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden">
    //         <h1>Testing</h1>
    //         {/* heading */}
    //         <div className="flex justify-center w-3/4 py-5">
    //             <h1 className=""> 
    //                 Project Gallery
    //             </h1>
    //         </div>

    //         <hr className="container mx-auto"></hr>  
    //         <div className="flex flex-col relative items-center w-3/4 h-1/2">
    //             <h3 className="h-[10%] pt-2">
    //                 Completed Projects
    //             </h3>
    //             <div className="grid grid-cols-3 gap-5 w-[90%] h-[90%]">
    //                 <Project/>
    //             </div>
    //         </div>
    //         <button
    //             onClick={displayGallery}
    //             className="expand-btn w-40 h-8 mt-2 text-[white] rounded-full bg-[#34b252] active:scale-105
    //             hover:text-[#34b525] hover:border-2 hover:border-[#34b525] hover:bg-[white]">
    //                 Show more
    //         </button>
    //         <hr className="container mx-auto"></hr>
    //     </div>
    //     )

   // return projectsContainer
    return(
        <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden">
        <h1>Testing</h1>
        {/* heading */}
        <div className="flex justify-center w-3/4 py-5">
            <h1 className=""> 
                Project Gallery
            </h1>
        </div>
        <h1>header</h1>
        <ProjectsContainer/>
        </div>
    )
    
}





