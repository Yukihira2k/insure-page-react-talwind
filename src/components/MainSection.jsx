
function MainSection(){

    return(
        <>
        <div className="flex justify-center items-center mt-10 gap-5 text-white bg-dark-violet h-[75vh] max-lg:flex-col-reverse max-lg:mt-10 max-lg:h-auto w-auto max-lg:text-center">
            <div className="flex-col justify-start ">
                <hr className="w-64 hidden lg:block"></hr>

                <h1 className="text-8xl mb-12 max-md:text-center max-md:text-6xl max-md:mt-28 max-lg:mt-64"><span className="block">Humanizing</span> your insurance.</h1>

                <p className="w-[650px] text-justify text-xl mb-12 max-lg:text-center max-md:text-center max-md:m-5 max-md:w-auto">Get your life insurance coverage easier and faster. We blend our
                    expertise and technology to help you find the plan that's right for you.
                    Ensure you and your loved ones are protected
                </p>
                
                <button className="border-2 border-white py-3 px-10 max-md:my-10 max-lg:mt-10 max-lg:mb-[15%]">VIEW PLANS</button>
                
      
            </div>

            <div>
                <img className="mb-[-250px] max-md:hidden max-lg:mt-10" src="/images/image-intro-desktop.jpg"></img>
                <img className=" hidden max-md:block  w-[100vh]" src="/images/image-intro-mobile.jpg"></img>
            </div>
            <img className="absolute bottom-24 left-0 max-lg:hidden" src="/images/bg-pattern-intro-left-desktop.svg"></img>
            <img className="absolute top-28  right-0 max-lg:hidden" src="/images/bg-pattern-intro-right-desktop.svg"></img>

        </div>
        </>
    )
}

export default MainSection;