import React, {useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {toast} from "react-toastify";


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



    useEffect(() => {

        if (result.status === 'success'){
            toast.success(result.status, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }else {
            toast.error(result.status, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    },[result.status])

    if (result.isPending) {
        return <>Loading</>
    }

    return(
        <>
            <h1 style={{marginLeft:50,marginTop:20}}> Fetch Status : {result.fetchStatus}</h1>

            {
                result && result.data?.map((list:any ,index:any)=>{
                    return <li id={list.id} style={{marginLeft:50,marginTop:20}}>{list.title}</li>
                })
            }
        </>
    )
}