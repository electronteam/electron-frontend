import {Principala} from "./components/Principala";
import {Electronice} from "./components/Electronice";
import {Electromontaj} from "./components/Electromontaj";
import {Articole} from "./components/Articole";
import {Contacte} from "./components/Contacte";

export const properties = {
    header: {
        links: [
            {
                displayText: "Principala",
                path: "/",
                component: Principala
            },
            {
                displayText: "Electronice",
                path: "/electronice",
                component: Electronice
            },
            {
                displayText: "Electromontaj",
                path: "/electromontaj",
                component: Electromontaj
            },
            {
                displayText: "Articole",
                path: "/articole",
                component: Articole
            },
            {
                displayText: "Contacte",
                path: "/contacte",
                component: Contacte
            }
        ]
    }
};