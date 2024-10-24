import style from "./NavBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ ProductsPerPage, totalProducts, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
      pageNumbers.push(i);
    }
  

    return (
        <div className={style.container}>
            <nav>
                <ul className={style.pagination}>
                    <li>
                        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={style.btn}>
                            Previous
                        </button>
                    </li>
                    {pageNumbers.map(number => (
                        <li key={number} className={currentPage === number ? style.active : ''}>
                            <button onClick={() => paginate(number)} className={style.btn}>
                                {!number ? '1' : number}    
                            </button>
                        </li>
                    ))}
                    <li>
                        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length} className={style.btn}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}