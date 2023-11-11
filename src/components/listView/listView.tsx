import React from "react";
import {useQuery} from "@tanstack/react-query";


export const ListView = ()=> {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = useQuery({
            queryKey: ['posts'],
            queryFn: async function () {
                const data = await fetch("https://jsonplaceholder.typicode.com/posts")
                return data.json()
            }
        }
    )

    console.log('result data:', result)
    if (result.isPending){
        return <>Loading</>
    }
    return(
        <>
            {
                result && result.data?.map((list:any ,index:any)=>{
                    return <li id={list.id} style={{marginLeft:50,marginTop:20}}>{list.title}</li>
                })
            }
        </>
    )
}