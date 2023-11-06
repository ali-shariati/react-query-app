import React from 'react';
import './App.css';
import {useQuery} from '@tanstack/react-query';

function App() {
    const result = useQuery({
            queryKey: ['posts'],
            queryFn: async function () {
                const data = await fetch("https://jsonplaceholder.typicode.com/posts")
                return data.json()
            }
        }
    )

    console.log('result data:', result)
    return (
        <>
        </>
    );
}

export default App;
