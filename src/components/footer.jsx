

function Footer(){


    return(
        <>
            <div className="flex-col mb-[3%]">
         
            <div className="flex justify-between ml-[16%] mr-[16%] max-lg:flex-col max-lg:justify-center max-lg:items-center">
                <div className="max-lg:mb-5">
                    <img src="/images/logo.svg"></img>
                </div>

                <div className="gap-10 flex cursor-pointer ">
                    <img src="/images/icon-facebook.svg"></img>
                    <img src="/images/icon-twitter.svg"></img>
                    <img src="/images/icon-pinterest.svg"></img>
                    <img src="/images/icon-instagram.svg"></img>
                </div>
            </div>
            <hr className="border mx-[16%] my-10 max-lg:mx-5"></hr>

            <div className="flex items-start justify-center gap-[14%] max-lg:flex-col max-lg:gap-0 max-lg:items-center max-lg:text-center">
                <div>
                    <h1 className="text-slate-500 mb-5 max-lg:m-5">OUR COMPANY</h1>

                    <ul>
                        <li className="text-gray-800 font-thin pb-1">HOW WE WORK</li>
                        <li className="text-gray-800 font-thin pb-1">WHY INSURE?</li>
                        <li className="text-gray-800 font-thin pb-1">VIEW PLANS</li>
                        <li className="text-gray-800 font-thin pb-1">REVIEWS</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-slate-500 mb-5 max-lg:m-5">HELP ME</h1>

                    <ul>
                        <li className="text-gray-800 font-thin pb-1">FAQ</li>
                        <li className="text-gray-800 font-thin pb-1">TERMS OF USE</li>
                        <li className="text-gray-800 font-thin pb-1">PRIVACY POLICY</li>
                        <li className="text-gray-800 font-thin pb-1">COOKIES</li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-slate-500 mb-5 max-lg:m-5">CONTACT</h1>

                    <ul>
                        <li className="text-gray-800 font-thin pb-1">SALES</li>
                        <li className="text-gray-800 font-thin pb-1">SUPPORT</li>
                        <li className="text-gray-800 font-thin pb-1">LIVE CHAT</li>
                       
                    </ul>
                </div>

                <div>
                    <h1 className="text-slate-500 mb-5 max-lg:m-5">OTHERS</h1>

                    <ul>
                        <li className="text-gray-800 font-thin pb-1">CAREERS</li>
                        <li className="text-gray-800 font-thin pb-1"> PRESS</li>
                        <li className="text-gray-800 font-thin pb-1">LICENSES</li>
                    </ul>
                </div>


            </div>
            </div>
        
        </>
    )

}

export default Footer;