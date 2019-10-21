import React from 'react';
import ProductList from "./ProductList";

export function Principala()
{
    return (
            <div className="container text-center">
                <h1>Pagina principala</h1>
                <br/>
                <ProductList/>
            </div>
    );
}