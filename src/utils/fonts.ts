import { Raleway, Open_Sans } from "next/font/google";

const raleway_init = Raleway({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500','600','700'],
    variable: '--font-raleway',
});

const open_sans_init = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500','600','700'],
    variable: '--font-open_sans',
});


export const raleway = raleway_init.variable;
export const open_sans = open_sans_init.variable;