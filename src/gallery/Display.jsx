
// import Projects from "./GalleryTest"

 function Gallery(){
    
    return (
        <div className="w-screen h-screen flex flex-col items-center overflow-x-hidden">
            {/* heading */}
            <div className="flex justify-center w-3/4 py-5">
                <h1 className=""> 
                    Project Gallery
                </h1>
            </div>

            <hr className="container mx-auto"></hr>
            
            {/* completed projects */}
            <div className="flex flex-col relative items-center w-3/4 h-1/2">
                <h3 className="h-[10%] pt-2">
                    Completed Projects
                </h3>
                <div className="flex flex-row justify-between w-[90%] h-[80%]">
                    <div className="w-[30%] h-full shadow-md hover:shadow-lg rounded-md">
                        <div className="w-full h-1/2">
                            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" 
                            alt="" className="w-full h-full rounded-t-md"/>
                        </div>
                        <div className="flex flex-col items-center w-full h-1/2">
                            <h4 className="text-center my-2 w-2/3">
                                Project Heading
                            </h4>
                            <p className="mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat.
                                <span className="text-sm text-[#34b252] hover:underline">
                                    <a href="#"> ...Read more.</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[30%] h-full shadow-md hover:shadow-lg rounded-md">
                        <div className="w-full h-1/2">
                            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" 
                            alt="" className="w-full h-full rounded-t-md"/>
                        </div>
                        <div className="flex flex-col items-center w-full h-1/2">
                            <h4 className="text-center my-2 w-2/3">
                                Project Heading
                            </h4>
                            <p className="mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat.
                                <span className="text-sm text-[#34b252] hover:underline">
                                    <a href="#"> ...Read more.</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[30%] h-full shadow-md hover:shadow-lg rounded-md">
                        <div className="w-full h-1/2">
                        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" 
                        alt="" className="w-full h-full rounded-t-md"/>
                        </div>
                        <div className="flex flex-col items-center w-full h-1/2">
                            <h4 className="text-center my-2 w-2/3">
                                Project Heading
                            </h4>
                            <p className="mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat.
                                <span className="text-sm text-[#34b252] hover:underline">
                                    <a href="#"> ...Read more.</a>
                                </span>
                            </p>
                        </div>
                    </div>
                 </div>

                {/* expand button */}
                <button className="expand-btn w-40 h-8 mt-2 text-[white] rounded-full bg-[#34b252] active:scale-105 
                hover:text-[#34b525] hover:border-2 hover:border-[#34b525] hover:bg-[white]">
                    Show more
                </button>

                 {/* callossel buttons */}
                 <div className="absolute ">
                     <img src="" alt="" />
                 </div>
                 <div className="">
                     <img src="" alt="" />
                 </div>
             </div>

             <hr className="container mx-auto"></hr>

             {/* prjects in progress */}
             <div className="flex flex-col relative items-center w-3/4 h-1/2">
                 <h3 className="h-[10%] pt-2">
                     Projects in Progress
                 </h3>
                 <div className="flex justify-between w-[90%] h-[80%]">
                     <div className="w-[30%] h-full shadow-md hover:shadow-lg rounded-md">
                         <div className="w-full h-1/2">
                         <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" 
                        alt="" className="w-full h-full rounded-t-md"/>
                        </div>
                        <div className="flex flex-col items-center w-full h-1/2">
                            <h4 className="text-center my-2 w-2/3">
                                Project Heading
                            </h4>
                            <p className="mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat.
                                <span className="text-sm text-[#34b252] hover:underline">
                                    <a href="#"> ...Read more.</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[30%] h-full shadow-md hover:shadow-lg rounded-md">
                        <div className="w-full h-1/2">
                        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" 
                        alt="" className="w-full h-full rounded-t-md"/>
                        </div>
                        <div className="flex flex-col items-center w-full h-1/2">
                            <h4 className="text-center my-2 w-2/3">
                                Project Heading
                            </h4>
                            <p className="mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat.
                                <span className="text-sm text-[#34b252] hover:underline">
                                    <a href="#"> ...Read more.</a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[30%] h-full shadow-md hover:shadow-lg rounded-md">
                        <div className="w-full h-1/2">
                        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdHN8ZW58MHx8MHx8fDA%3D" 
                        alt="" className="w-full h-full rounded-t-md"/>
                        </div>
                        <div className="flex flex-col items-center w-full h-1/2">
                            <h4 className="text-center my-2 w-2/3">
                                Project Heading
                            </h4>
                            <p className="mx-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat.
                                <span className="text-sm text-[#34b252] hover:underline">
                                    <a href="#"> ...Read more.</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* expand button */}
                <button className="expand-btn w-40 h-8 mt-2 text-[white] rounded-full bg-[#34b252] active:scale-105 
                hover:text-[#34b525] hover:border-2 hover:border-[#34b525] hover:bg-[white]">
                    Show more
                </button>

                {/* callossel buttons */}
                <div className="absolute ">
                    <img src="" alt="" />
                </div>
                <div className="">
                    <img src="" alt="" />
                </div>
            </div> 

        </div>
    )

}

export default Gallery;