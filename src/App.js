import React, {Suspense, useState} from 'react';
import './styles/App.css';
import {TopBar} from "./components/TopBar";
import HeaderMainMenu from "./components/HeaderMainMenu";
import {Footer} from "./components/Footer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import Loading from "./components/Loading";

function App()
{
    const [locale, setLocale] = useState(i18n.language);

    i18n.on('languageChanged', (lng) => setLocale(i18n.language));

    return (
            <LocaleContext.Provider value={{locale, setLocale}}>
                <Suspense fallback={<Loading />}>
                    <MuiThemeProvider>
                        <div>
                            <TopBar/>
                            <HeaderMainMenu/>
                            <Footer/>
                        </div>
                    </MuiThemeProvider>
                </Suspense>
            </LocaleContext.Provider>
    );
}

export default App;
