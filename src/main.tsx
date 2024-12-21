import {createContext, StrictMode, useState} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx";

export type BackgroundImageContextType = {
    background: string,
    setBackground: (background: string) => void
}

export const BackgroundImageContext = createContext<BackgroundImageContextType | undefined>(undefined);

const WrappedApp = () => {
    const [background, setBackground] = useState<string>("")
    return (
        <BackgroundImageContext.Provider
        value={{background : background, setBackground: setBackground}}>
            <App/>
        </BackgroundImageContext.Provider>
    )
}

const RootApp = () => {
    if(import.meta.env.DEV)
        return <WrappedApp/>
    else
        return (<StrictMode>
            <WrappedApp/>
        </StrictMode>)

}

createRoot(document.getElementById('root')!).render(
  <RootApp/>
)
