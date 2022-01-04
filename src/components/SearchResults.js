import React from 'react';
import ProductList from "./ProductList";
import SuggestiveBar from "./SuggestiveBar";
import {properties} from '../properties.js';
import {useTranslation} from "react-i18next";

export function SearchResults()
{
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const term = params.get(properties.search.term);
    const {t} = useTranslation();

    return (
            <div className="container text-center">
                <SuggestiveBar suggestiveText={t('search.suggestiveText')}/>
                <ProductList searchTerm={term}/>
            </div>
    );
}

export default SearchResults;