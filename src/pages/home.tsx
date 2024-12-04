import Navbar from "../components/Navbar.tsx";
import {HobbyItem, HobbyItemProps} from "../components/HobbyItem.tsx";
import {useEffect, useRef, useState} from "react";

const Home = () => {
    const [hobbies, setHobbies] = useState<HobbyItemProps[]>([]);
    const didRun = useRef(false);

    useEffect(() => {
        if(!didRun.current){

        let newHobbyItems: HobbyItemProps = {
            title: "프로그래밍",
            content: "어렸을적",
            image: "https://t4.ftcdn.net/jpg/03/05/23/35/360_F_305233591_U7DvegTtiIoP2CWNUpR5qxrFvqpjpYW9.jpg",
            url: "http://localhost:8080"
        }

        setHobbies((prevHobbies) => [...prevHobbies, newHobbyItems])
        didRun.current = true;

        }
    }, []);



    return (
        <>
            <Navbar/>
            <div className="container mx-auto mt-[50px]">
                <h1 className="text-4xl text-center mt-10">나의 취미는?</h1>
                <p className="text-center mt-5">
                    마우스를 호버하여 확인해 보세요!
                </p>
                <div className="flex flex-col space-y-4">

                    {hobbies.map((props, index) => <HobbyItem key={index} {...props} />)}
                </div>
            </div>
        </>
    );
};

export default Home;
