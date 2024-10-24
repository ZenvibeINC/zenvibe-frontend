import Sytles from "./MenuBar.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";


export default function MenuBar() {
    const [open, setOpen] = useState(false);
    return (
        <div className={Sytles.container}>
            <div className={!open ? Sytles.menu : Sytles.closed} onClick={() => setOpen(!open)}>
                <div className={Sytles.line}></div>
                <div className={Sytles.line}></div>
                <div className={Sytles.line}></div>
            </div>
            <div className={Sytles.menuItems} onClick={() => setOpen(!open)}>
                <ul style={{ display: open ? "block" : "none" }}>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Products</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className={Sytles.SearchBar}>
                <SearchBar />
            </div>
        </div>
    );
}