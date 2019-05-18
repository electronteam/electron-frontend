import {Home} from "./components/Home";
import {Test} from "./components/Test";

export const properties = {
    header: {
        links: [
            {
                displayText: "Electronice",
                path: "/",
                component: Home
            },
            {
                displayText: "Electromontaj",
                path: "/test",
                component: Test
            }
        ]
    }
};