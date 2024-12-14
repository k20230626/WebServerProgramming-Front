import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


const RootApp = () => {
    if(import.meta.env.DEV)
        return <App/>
    else
        return (<StrictMode>
            <App />
        </StrictMode>)

}

createRoot(document.getElementById('root')!).render(
  <RootApp/>
)
