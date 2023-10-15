

function Card(props){
  
    return(
        <>
     
      
            <div className="flex-col items-center justify-center  ">
                <img className="max-lg:ml-[42%] max-md:ml-[40%] max-sm:ml-[38%]"src={props.icon}/>
                <p className="text-3xl mt-10 mb-7 text-zinc-700 font-bold">{props.title}</p>
                <p className="text-slate-500">{props.description}</p>
            </div>
    
         
        </>
    )
}

export default Card