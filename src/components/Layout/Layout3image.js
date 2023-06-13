const Layout3image =({props})=>{
    
    return (
        <div className="relative w-full h-fit grid grid-row-2 mt-[10px] mt-[50px]">
            <div className="w-full">{props.titre}</div>
            <div className="mx-auto w-full row-start-2 grid grid-cols-3 gap-20 mt-[10px]">
                <div className="col-start-1 flex justify-start">
                    <div className="flex flex-col ">
                        <div className="mt-[60px] flex center"> <img src={props.image1.url} alt={props.image1.alt} className={props.image1.className} /></div>        
                        {props.col1}
                    </div>
                </div>
                <div className="col-start-2 flex justify-start">
                    <div className="flex flex-col ">
                        <div className="mt-[60px] flex center"> <img src={props.image2.url} alt={props.image2.alt} className={props.image1.className}/></div>        
                        {props.col2}
                    </div>
                </div>
                <div className="col-start-3 flex justify-start">
                    <div className="flex flex-col ">
                        <div className="mt-[60px] flex center"> <img src={props.image3.url} alt={props.image3.alt} className={props.image1.className}/></div>        
                        {props.col3}
                    </div>
                </div>
            </div>

        </div>
        
    )
}
export default Layout3image