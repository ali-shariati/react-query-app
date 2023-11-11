import React, {useState} from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ListView} from "./components/listView/listView";


function App() {

    const[flag, setFlag] =useState(true)

    return (
        <>
            {
                flag && <>

                    <ListView  />
                </>
            }
            <button
                onClick={()=>setFlag(!flag)}
                style={{width:150, backgroundColor:'#356bb2',marginLeft:100, marginTop:50, marginBottom:50, color:'#fff',padding:10}}>
                toggle
            </button>
            <ToastContainer />
        </>
    );
}

export default App;
