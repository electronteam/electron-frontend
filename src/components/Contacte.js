import React from 'react';
import {useTranslation} from "react-i18next";

export function Contacte() {
    const {t} = useTranslation();

    return (
            <div className="container text-center">
                <h1>{t('header.contacts.suggestive')}</h1>
            </div>
    );
}