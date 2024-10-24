import MenuBar from "../Components/MenuBar/MenuBar";
import Cards from "../Components/ProductCards/Cards/Cards";
import NavBar from "../Components/NavBar/NavBar";
import Styles from "../General.module.css"
export default function Home() {
    return (
        <div className={Styles.container}>
            <MenuBar />
            <Cards />
            <NavBar />
        </div>
    );
}