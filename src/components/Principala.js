import React from 'react';
import SuggestiveBar from "./SuggestiveBar";
import ProductList from "./ProductList";
import {useTranslation} from "react-i18next";

export function Principala()
{
    const {t} = useTranslation();

    return (
            <div className="container text-center">
                <SuggestiveBar suggestiveText={t('mostSold')}/>
                <ProductList/>
            </div>
    );
}