import "./HobbyItem.css"

export type HobbyItemProps = {
    title: string;
    description: string;
    externalUrl: string;
    image: string
}

const main_class_name = "main-background-active"

export const HobbyItem = (props : HobbyItemProps  ) => {
    return (
        <div className="flex flex-col relative text-white hobby-item" onClick={() => openExternalLink(props.externalUrl)}
             onMouseEnter={() => changeBackground(props.image)}
             onMouseLeave={nullBackground} >
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

const changeBackground = (img: string) => {
    const imgElement = document.querySelector(".main-background-image") as HTMLImageElement
    if(!imgElement)
        return

    imgElement.setAttribute("src", img)

    imgElement.classList.add(main_class_name)

}
const nullBackground = () => {
    const imgElement = document.querySelector(".main-background-image") as HTMLImageElement
    if(!imgElement)
        return

    imgElement.classList.remove(main_class_name)

}