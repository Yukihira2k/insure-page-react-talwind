
function Button(props){
    return(
        <>
             <button className={`border-2 border-black py-1 px-4`}>{props.title}</button>
        </>
    )
}

export default Button;