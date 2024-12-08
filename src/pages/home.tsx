import {HobbyItem, HobbyItemProps} from "../components/HobbyItem.tsx";
import {useEffect, useRef, useState} from "react";

const Home = () => {
    const [hobbies, setHobbies] = useState<HobbyItemProps[]>([]);
    const didRun = useRef(false);

    useEffect(() => {
        if (!didRun.current) {

            let newHobbyItems: HobbyItemProps[] = [{
                title: "프로그래밍",
                content: <>
                    <span>고등학교 코로나 때 게임이 질려서 시작하게 된 계기로 움직이는 것을 싫어하는 나에게 프로그래밍은 창작의 재미를 나에게 줬다.</span>
                    <br/>
                    <span>왜인지 모르겠지만 고등학교 때 부터 C#을 주로 다루었으며, React는 고등학교 3학년 때 처음 다뤄보았다. 이때 React는 버전이 16이였고 hook 대신 class로 구현해야 되서 라이프 사이클을 알아야 했었다.</span>
                    <br/>
                    <span>c#으로 백엔드를 만들고, react로 프론트를 만들어서 자그만한 사이트를 운영했던 적이 있다.</span>
                    <br/>
                    <span>여기서도 DB로 MongoDB를 썼었는데 안좋은 추억이 있어서 MongoDB를 그렇게 선호하지 않는다.</span>
                </>,
                image: "https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg",
                url: "https://github.com/N-Joy-Shadow"
            }, {
                title: "애니메이션",
                content: <>
                    <span>다른 사람들이 드라마나 보듯 나는 애니메이션을 본다. </span>
                    <span>가장 재밌게 봤던 애니는 슈타인즈 게이트, 페이트 제로, 바이올렛 에버가든가 있다.</span>
                    <br/>
                    <span>요즘에는 애니메이션보단 만화를 선호하고 있다.</span>
                </>,
                image: "https://i.namu.wiki/i/7ebO-eqvlXty-WxFM_DlJZD0EOoPmduukOG6mWJkArYUm0VY5xj8aATMsxWX9CaQBOCgbJZ_Ne-teMoXQgiA-3fo61uWo4iGmSuA56RsJW7Kcnj1L7Opj2gfkXceQEBlcQwfzpBDbLs0d0mBcDWXOQ.webp",
                url: "https://laftel.net/item/39985"
            }, {
                title: "만화",
                content: <>
                    <span>애니메이션보단 더 라이트하게 즐길 수 있어서 최근에는 더 자주 본다.</span>
                    <br/>
                    <span>연속적인 애니메이션과 다르게 도중에 그만 보기도 좋고 짧은 시간을 소모하기 때문에 만화를 보는 것이 애니메이션을 보는 것 보다 선호한다.</span>
                    <br/>
                    <span>가장 재밌게 봤던 만화는 장송의 프리렌과 철야의 노래가 있다.</span>
                    <br/>
                    <span>현재는 J⇔M과 숨은 실력자가 되고 싶어서!를 가장 재밌게 보고 있다.</span>
                </>,
                image: "https://i.namu.wiki/i/SnszjXShYXSYQpR-DHEra0vdhaWFLTjuvPfHVXcTEPgg1c8wBuhqDMzaREvMZbTS-Cih516stAZE1aLQlm21JyxlMG6rOp5_AuueOAbovxvg6MXaI4CmxI_nV4wAjw_0UFdk5nImvPlGthfypNXApg.webp",
                url: "https://namu.wiki/w/%EC%9E%A5%EC%86%A1%EC%9D%98%20%ED%94%84%EB%A6%AC%EB%A0%8C"
            }, {
                title: "메이플스토리",
                content: <>
                    <span>중학교 때부터 열심히 했던 게임으로 이젠 하나의 숙제가 된 게임이다.</span>
                    <br/>
                    <span>메이플 스토리를 하면서 애니메이션을 보는 것이 가능해서 취미 활동을 2배로 할 수 있다는 장점이 있다.</span>
                    <br/>
                    <span>옛날에 Xamarin.Android를 활용하여 메이플 관련 앱을 플레이 스토어에 출시한적이 있다. 하지만 현재는 관리하고 있지 않아 플래이 스토어에서 내린 상태이다.</span>
                </>,
                image: "https://i.namu.wiki/i/NUzo8Y8CQrxIjuZF9SlDK1ciyYMegj3PRFRi4x6qd6ll4C-jY3BEk4sPPACnrYCwWvbIZDYM49XSqT6gkBaNmg.webp",
                url: "https://maplestory.nexon.com"
            }]

            newHobbyItems.map((x) => {
                setHobbies((prevHobbies) => [...prevHobbies, x])
            })
            didRun.current = true;

        }
    }, []);


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
                <div className="flex flex-col space-y-4">
                    {hobbies.map((props, index) => <HobbyItem key={index} {...props}/>)}
                </div>
            </div>
            <div className="main-background-blur"/>
            <img className="absolute main-background-image" />
        </main>
    )
};

export default Home;
