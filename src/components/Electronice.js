import React from 'react';
import ProductList from "./ProductList";
import SuggestiveBar from "./SuggestiveBar";

export function Electronice()
{
    const suggestiveText = 'Pagina produselor electronice';

    return (
            <div className="container text-center">
                <SuggestiveBar suggestiveText={suggestiveText}/>
                <ProductList/>
            </div>
    );
}