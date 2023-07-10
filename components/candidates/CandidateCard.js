const CandidateCard=(props)=>{
    

    
    
    

    return(
    <>
    <div className={`rounded-md shadow-md shadow-neutral-200 py-4 px-3  hover:translate-y-[-10px] hover:transition-all flex flex-col border border-white my-7 mx-5 bg-gradient-to-r from-[#DC143C] to-[#F05C79]`}>
        <h1 className="font-extrabold mb-2">{props.name}</h1>
         <div className="flex space-x-2 my-2 text-sm">
            <img src='/icon.png'></img>
            <p>{props.last_updated_at}</p>
         </div>
         <div className="flex space-x-2 my-1 text-sm">
            <img src='/icon.png'></img>
            <p>{props.location}</p>
         </div>
         <div className="flex space-x-2 my-1 text-sm">
            <img src='/icon.png'></img>
            <p>{props.gender}</p>
         </div>



    </div>
    </>)
    
}
export default CandidateCard