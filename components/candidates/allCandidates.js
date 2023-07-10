import axios from "axios"
import { useEffect, useState } from "react"
import CandidateCard from "./CandidateCard"
const AllCandidates=()=>{

    const [candidates,setCandidates]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const fetchAll=async()=>{
     const result=await axios.get('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d')
     setCandidates(result.data.data)
    }

    useEffect(()=>{
        fetchAll().then(()=>setIsLoading(false))
    },[])
   let status=['Applied','Accepted','Rejected']
  return(
    <div className="my-5 mx-[10%]">
    {!isLoading && <div className={`grid grid-cols-${status.length}`}>
       {
        status.map((status,i)=>{
            return(
                <div key={i}>
                    <h1 className="font-semibold text-2xl mx-5">{status}</h1>
                    {
                        candidates.length>0 && candidates.filter((c)=>c.status==status).map((c)=>{
                            return(
                                <div key={c.id}>
                                <CandidateCard {...c}></CandidateCard>
                                </div>
                            )
                        })
                    }
                </div>
            )

        })
       }

    </div>
}
{isLoading && <div className="flex justify-center items-center h-[80vh]">
    <p><img src="/loader1.svg"></img></p>
    </div>}

    </div>)
  
}
export default AllCandidates