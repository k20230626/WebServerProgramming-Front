import Navbar from "../components/Navbar.tsx";
import {HobbyItem, HobbyItemProps} from "../components/HobbyItem.tsx";
import {useEffect, useRef, useState} from "react";

const Home = () => {
    const [hobbies, setHobbies] = useState<HobbyItemProps[]>([]);
    const didRun = useRef(false);

    useEffect(() => {
        if (!didRun.current) {

            let newHobbyItems: HobbyItemProps[] = [{
                title: "프로그래밍",
                content: "으아아아아",
                image: "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg",
                url: "http://localhost:8080"
            }, {
                title: "애니메이션",
                content: "",
                image: "https://image.aladin.co.kr/product/21011/12/cover500/e502536774_1.jpg",
                url: "http://localhost:8080"
            }, {
                title: "만화",
                content: "ㅏ다다다 다컴너트 ",
                image: "https://pbs.twimg.com/media/FNJVvXuakAcc-4t.jpg",
                url: "http://localhost:8080"
            }]

            newHobbyItems.map((x) => {
                setHobbies((prevHobbies) => [...prevHobbies, x])
            })
            didRun.current = true;

        }
    }, []);


    return (
        <main className="main-background">
            <Navbar/>
            <div className="container mx-auto pt-[50px]">
                <h1 className="text-4xl text-center mt-2 font-bold">나의 취미는?</h1>
                <p className="text-center my-5">
                    마우스를 호버하여 확인해 보세요!
                </p>
                <div className="flex flex-col space-y-4">
                    {hobbies.map((props, index) => <HobbyItem key={index} {...props}/>)}
                </div>
            </div>
            <div className="main-background-blur"/>
        </main>
    )
};

export default Home;
