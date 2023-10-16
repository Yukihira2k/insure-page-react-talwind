
function AboutUs(){
    return(
        <>
        <div className="flex items-center justify-around  my-[10%] bg-dark-violet  py-[100px] mx-[16%] relative z-[-2] max-lg:flex-col max-lg:mx-[5%] max-lg:text-center" >
            <div>
                
                <h1 className="text-6xl text-white max-lg:pb-10 font-bold"><span className="block">Find out more</span> about how we work</h1>
            </div>
            
            <div>
            <img className="absolute right-0 top-0 h-[294px] z-[-1] max-lg:hidden"src="/images/bg-pattern-how-we-work-desktop.svg"></img>
            <img className="absolute right-0 top-0 h-[95%] z-[-1] max-lg:w-[35%] max-md:w-[45%] max-sm:w-[65%] hidden max-lg:block"src="/images/bg-pattern-how-we-work-mobile.svg"></img>
                <button className="py-3 px-6 border border-white text-white z-[2] cursor-pointer">HOW WE WORK</button>
            </div>

          
        </div>
        </>
    )
}

export default AboutUs;