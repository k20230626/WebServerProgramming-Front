import "./HobbyItem.css"
import {useContext} from "react";
import {BackgroundImageContext} from "../main.tsx";

export type HobbyItemProps = {
    title: string;
    description: string;
    externalUrl: string;
    image: string
}

export const HobbyItem = (props : HobbyItemProps  ) => {
    const { setBackground } = useContext(BackgroundImageContext)!;
    return (
        <div className="flex flex-col relative text-white hobby-item" onClick={() => openExternalLink(props.externalUrl)}
             onMouseEnter={() => setBackground(props.image)}>
            <div className="z-10 backdrop-blur  p-4 hover:block hobby-item-container" >
                <p className="text-2xl font-bold hobby-item-title">{props.title}</p>
                <div className="hobby-item-content-container divide-x">
                    <div aria-hidden="true"/>
                    <p className="pl-2 text-md flex-1 text-start text-wrap" >
                        <div dangerouslySetInnerHTML={{ __html: props.description }}/>
                    </p>
                </div>
            </div>
            <div className="hobby-item-background absolute"/>
            <img className="absolute object-cover w-full z-[-1] h-full" src={props.image} alt="hobby image"/>
        </div>
    )

}

const openExternalLink = (url :string) => {
    window.open(url)
}
