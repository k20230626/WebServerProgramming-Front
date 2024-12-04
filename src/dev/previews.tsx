import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Home from "../pages/home.tsx";
import Navbar from "../components/Navbar.tsx";
import {HobbyItem} from "../components/HobbyItem.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/HobbyItem">
                <HobbyItem title="프로그래밍" content="ㅁ나넘이ㅏ"
                           image="https://t4.ftcdn.net/jpg/03/05/23/35/360_F_305233591_U7DvegTtiIoP2CWNUpR5qxrFvqpjpYW9.jpg"
                           url="njoys.me"/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;