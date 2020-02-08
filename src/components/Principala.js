import React from 'react';
import SuggestiveBar from "./SuggestiveBar";
import ProductList from "./ProductList";

export function Principala()
{
    const suggestiveText = 'Cele mai vindute produse';

    return (
            <div className="container text-center">
                <SuggestiveBar suggestiveText={suggestiveText}/>
                <ProductList/>
            </div>
    );
}