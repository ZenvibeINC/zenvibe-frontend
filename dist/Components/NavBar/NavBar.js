import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from "./NavBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginForm({ ProductsPerPage, totalProducts, paginate, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (_jsx("div", { className: style.container, children: _jsx("nav", { children: _jsxs("ul", { className: style.pagination, children: [_jsx("li", { children: _jsx("button", { onClick: () => paginate(currentPage - 1), disabled: currentPage === 1, className: style.btn, children: "Previous" }) }), pageNumbers.map(number => (_jsx("li", { className: currentPage === number ? style.active : '', children: _jsx("button", { onClick: () => paginate(number), className: style.btn, children: !number ? '1' : number }) }, number))), _jsx("li", { children: _jsx("button", { onClick: () => paginate(currentPage + 1), disabled: currentPage === pageNumbers.length, className: style.btn, children: "Next" }) })] }) }) }));
}
//# sourceMappingURL=NavBar.js.map