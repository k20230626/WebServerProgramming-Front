import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Home from "../pages/home.tsx";
import {HobbyItem} from "../components/HobbyItem.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            <ComponentPreview path="/HobbyItem">
                <HobbyItem title="프로그래밍" content={<><span>
                asd</span> </>}
                           image="https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg"
                           url="njoys.me"/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;