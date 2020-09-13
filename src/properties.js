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
    productList: {
        noProductsDisplayText: "Nu a fost adaugat nici un produs",
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
        total: "Total",
        delete: "Scoate"
    },
    checkout: {
        path: "/checkout",
        title: "Completați mai jos datele necesare pentru plasarea comenzii",
        customerName: "Prenume:",
        customerNamePlaceholder: "de ex: Ion",
        customerLastName: "Nume:",
        customerLastNamePlaceholder: "de ex: Mihaescu",
        customerEmail: "Email:",
        customerEmailPlaceholder: "de ex: mihaescui@gmail.com",
        customerCity: "Localitate:",
        customerCityPlaceholder: "de ex: Chișinău",
        customerStreet: "Strada:",
        customerStreetPlaceholder: "de ex: str. Dumbrăveni 1/2, ap. 51",
        customerPhone: "Telefon:",
        customerPhonePlaceholder: "de ex: 069497268"
    },
    thankyou: {
        path: "/thankyou",
        header: "COMANDA A FOST PLASATĂ CU SUCCES !",
        orderNrText: "Numărul comenzii este:",
        noOrderDisplayText: "In sesiunea dumneavoastră nu a fost plasată nici o comandă",
        orderedItem: "Produsul comandat",
        quantity: "Cantitatea",
        price: "Preț",
        totalPrice: "Total",
        orderTotal: "Total comandă",
        customerDetails: "Datele personale"
    },
    search: {
        path: "/search",
        suggestiveText: "Rezultatele cautarii",
        term: "term",
        component: SearchResults
    },
    api: {
        allProducts: "http://localhost:8080/api/solr/products",
        searchProducts: "http://localhost:8080/api/solr/searchProducts",
        productByCode: "http://localhost:8080/api/product",
        addProductToCart: "http://localhost:8080/api/addtocart",
        deleteCartEntry: "http://localhost:8080/api/currentCart/deleteEntry",
        currentCart: "http://localhost:8080/api/currentCart",
        currentCartCount: "http://localhost:8080/api/currentCart/count",
        placeOrder: "http://localhost:8080/api/placeOrder",
        lastPlacedOrder: "http://localhost:8080/api/lastPlacedOrder"
    },
    url: {
        imageServerURL: "http://localhost:8080/"
    },
    popup: {
        displayText: "Produsul a fost adăugat în coșul de cumpărături."
    },
    buttons: {
        addToCart: "Adaugă în coș",
        goToCart: "Vezi coșul",
        continueShopping: "Continuă cumpărăturile",
        goToCheckout: "Finalizează comanda",
        placeOrder: "Plasează comanda",
    }
};