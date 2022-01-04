import React from 'react';
import {useTranslation} from "react-i18next";

export function Articole() {
    const {t} = useTranslation();

    return (
            <div className="container text-center">
                <h1>{t('header.articles.suggestive')}</h1>
            </div>
    );
}