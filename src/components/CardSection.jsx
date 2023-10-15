import data from "../Data/data"
import Card from "../props/Card"



function CardSection(){

function createCard(contact){
    return(
        <Card
        icon={contact.icon}
        title={contact.title}
        description={contact.description}
        />
    )
}

    return(
        <>
        <div className="mt-[10%] mx-[16%]">
           <hr className="w-auto mb-10"></hr>
        <h1 className="text-5xl max-md:text-4xl mb-[7%] max-lg:text-center max-md:w-full">We're different.</h1>
        <div className="flex gap-5 text-justify max-lg:flex-col max-lg:text-center">
        {data.map(createCard)}
        </div>
        </div>
      

     
        </>
    )
}

export default CardSection;