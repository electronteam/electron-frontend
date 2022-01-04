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
                displayText: "Principală",
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
        path: "/cart"
    },
    checkout: {
        path: "/checkout"
    },
    thankyou: {
        path: "/thankyou"
    },
    search: {
        path: "/search",
        term: "term",
        component: SearchResults
    },
    api: {
        allProducts: "http://localhost:8080/api/solr/products",
        searchProducts: "http://localhost:8080/api/solr/searchProducts",
        productByCode: "http://localhost:8080/api/product",
        addProductToCart: "http://localhost:8080/api/addtocart",
        deleteCartEntry: "http://localhost:8080/api/currentCart/deleteEntry",
        updateCart: "http://localhost:8080/api/currentCart/update",
        currentCart: "http://localhost:8080/api/currentCart",
        currentCartCount: "http://localhost:8080/api/currentCart/count",
        placeOrder: "http://localhost:8080/api/placeOrder",
        lastPlacedOrder: "http://localhost:8080/api/lastPlacedOrder"
    },
    url: {
        imageServerURL: "http://localhost:8080/"
    }
};