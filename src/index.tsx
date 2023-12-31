import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient({
    defaultOptions:{
        queries:{
            gcTime: 5000,
            staleTime: 5000,
            refetchOnMount:true,
            refetchOnWindowFocus:false,
        }
    }
})
ReactDOM.createRoot(
    document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
