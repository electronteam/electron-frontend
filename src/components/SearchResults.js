import React from 'react';
import ProductList from "./ProductList";
import SuggestiveBar from "./SuggestiveBar";
import {properties} from '../properties.js';

export function SearchResults(props)
{
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const term = params.get(properties.search.term);
    return (
            <div className="container text-center">
                <SuggestiveBar suggestiveText={props.suggestiveText}/>
                <ProductList searchTerm={term}/>
            </div>
    );
}

export default SearchResults;