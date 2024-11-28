import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Sytles from "./MenuBar.module.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
export default function MenuBar() {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: Sytles.container, children: [_jsxs("div", { className: !open ? Sytles.menu : Sytles.closed, onClick: () => setOpen(!open), children: [_jsx("div", { className: Sytles.line }), _jsx("div", { className: Sytles.line }), _jsx("div", { className: Sytles.line })] }), _jsx("div", { className: Sytles.menuItems, onClick: () => setOpen(!open), children: _jsxs("ul", { style: { display: open ? "block" : "none" }, children: [_jsx("li", { children: "Home" }), _jsx("li", { children: "Cart" }), _jsx("li", { children: "Products" }), _jsx("li", { children: "Help" })] }) }), _jsx("div", { className: Sytles.SearchBar, children: _jsx(SearchBar, {}) })] }));
}
//# sourceMappingURL=MenuBar.js.map