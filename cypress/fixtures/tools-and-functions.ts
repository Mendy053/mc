/// <reference types= "cypress"/>

export function cookiesSaver() {
    Cypress.Cookies.preserveOnce(
        "_ga",
        "_ga_C6W868XQPH",
        "fullname",
        "_hjAbsoluteSessionInProgress",
        "_hjid",
        "ASP.NET_SessionId",
        "_hjTLDTest",
        "_hjFirstSeen",
        "_gid",
        "_gat_UA-1675943-1",
        "_fbp",
        "_gcl_au"
    )
};

export const flowersMenu: string[] = [
    "זרי פרחים",
    "סידורי פרחים",
    "זר פרחים לראש",
    "אגרטלים",
    "משלוחי פרחים לחו\"ל",
    "גלגלי אבל"
]