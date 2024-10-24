import Styles from "./Cards.module.css";
import CardProduct from "../Card/CardProduct";


export default function Cards() {

    return (

        <div className={Styles.container}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </div>
    )

}