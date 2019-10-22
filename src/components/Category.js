import React from 'react';
import ProductList from "./ProductList";
import SuggestiveBar from "./SuggestiveBar";

export function Category(props)
{
    return (
            <div className="container text-center">
                <SuggestiveBar suggestiveText={props.suggestiveText}/>
                <ProductList/>
            </div>
    );
}

export default Category;