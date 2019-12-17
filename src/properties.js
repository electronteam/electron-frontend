import {Principala} from "./components/Principala";
import {Articole} from "./components/Articole";
import {Contacte} from "./components/Contacte";
import {Category} from "./components/Category";
import {SearchResults} from "./components/SearchResults";

export const properties = {
    contacts: {
        phone: "(+373) 69 479 862",
        email: "electron@gmail.com",
        mailto: "mailto:electron@gmail.com"
    },
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
                name: "electronice",
                suggestiveText: "Pagina produselor electronice",
                isCategoryLink: true,
                component: Category
            },
            {
                displayText: "Electromontaj",
                path: "/electromontaj",
                name: "electromontaj",
                suggestiveText: "Pagina produselor de electromontaj",
                isCategoryLink: true,
                component: Category
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
    },
    product: {
        path: "/produs/",
        paramName: "productCode"
    },
    cart: {
        path: "/cart",
        title: "Coșul de cumpărături",
        total: "Total comandă:"
    },
    cartentry: {
        name: "Nume produs",
        price: "Preț",
        quantity: "Cantitate",
        total: "Total"
    },
    checkout: {
        path: "/checkout"
    },
    search: {
        path: "/search",
        suggestiveText: "Rezultatele cautarii",
        term: "term",
        component: SearchResults
    },
    api: {
        allProducts: "/api/solr/products",
        searchProducts: "/api/solr/searchProducts",
        productByCode: "/api/product",
        addProductToCart: "/api/addtocart",
        currentCart: "/api/currentCart"
    },
    popup: {
        displayText: "Produsul a fost adăugat în coșul de cumpărături."
    },
    buttons: {
        addToCart: "Adaugă în coș",
        goToCart: "Vezi coșul",
        continueShopping: "Continuă cumpărăturile",
        goToCheckout: "Finalizează comanda",
    }
};