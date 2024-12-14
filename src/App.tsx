import {HobbyItem, HobbyItemProps} from "./components/HobbyItem.tsx";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import "./index.css"

const Home = () => {
    const [hobbies, setHobbies] = useState<HobbyItemProps[]>([]);
    useEffect(() => {

        axios.get(`${import.meta.env.VITE_API_URL}/api/hobby/`).then((res) => {
            if (res.status !== 200)
                return
            res.data.map((x: HobbyItemProps) => {
                setHobbies((prevHobbies) => [...prevHobbies, x])
            })
        })
    },[]);


    return (
        <main className="main-background">
            <nav className="h-[50px] backdrop-blur fixed w-full top-0 z-10">
                <div className="h-full flex justify-between container mx-auto items-center">
                    <h2 className="text-2xl select-none cursor-pointer" onClick={() => {
                        // @ts-ignore
                        window.location = "/"
                    }}>취미 리스트</h2>
                </div>
            </nav>
            <div className="container mx-auto pt-[50px]">
                <h1 className="text-4xl text-center mt-2 font-bold">나의 취미는?</h1>
                <p className="text-center my-5">
                    마우스를 호버하여 확인해 보세요!
                </p>
                {hobbies.length > 0 ? <div className="flex flex-col space-y-4">
                    {hobbies.map((props, index) => <HobbyItem key={index} {...props}/>)}
                </div> : <p className="text-center">로딩중...</p>}
            </div>


            <img className="main-background-blur main-background-image" alt={''}/>
        </main>
    )
};

export default Home;