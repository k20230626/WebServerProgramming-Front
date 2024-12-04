import "./HobbyItem.css"

export type HobbyItemProps = {
    title: string;
    content: string;
    url: string;
    image: string
}


export const HobbyItem = (props : HobbyItemProps  ) => {
    return (
        <div className="flex flex-col relative text-white hobby-item" onClick={() => openExternalLink(props.url)}>
            <div className="z-10 backdrop-blur  p-4 hover:block hobby-item-container" >
                <p className="text-2xl font-bold hobby-item-title">{props.title}</p>
                <div className="hobby-item-content-container divide-x">
                    <div/>
                    <p className="pl-2 text-md flex-1 text-start">{props.content}</p>
                </div>
            </div>
            <div className="hobby-item-background absolute"/>
            <img className="absolute object-fill w-full z-[-1]" src={props.image} alt="hobby image"/>
        </div>
    )

}

const openExternalLink = (url :string) => {
    window.open(url)
}
