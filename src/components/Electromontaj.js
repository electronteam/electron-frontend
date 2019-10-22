import React from 'react';
import SuggestiveBar from "./SuggestiveBar";
import ProductList from "./ProductList";

export function Electromontaj()
{
    const suggestiveText = 'Pagina produselor de electromontaj';

    return (
            <div className="container text-center">
                <SuggestiveBar suggestiveText={suggestiveText}/>
                <ProductList/>
            </div>
    );
}