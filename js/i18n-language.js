/**************************
 *    i18n-language.js
 *     Write by Shin Hyun (kyaryunha)
 *     Github: https://github.com/kyaryunha
 **************************/
(function () {
    "use strict";

    const style = document.createElement('style');
    style.innerHTML = ".unselect-language{display: none;}";
    document.getElementsByTagName('head')[0].appendChild(style);

    const setLanguage = (currentLanguage) => {
        const notCurrentTagNames = document.querySelectorAll("[data-lang]");
        notCurrentTagNames.forEach((tag) => {
            if (!tag.classList.contains("unselect-language")) {
                tag.classList.add("unselect-language");
            }
        });

        const currentTagNames = document.querySelectorAll(`[data-lang="${currentLanguage}"]`);
        currentTagNames.forEach((tag) => {
            if (tag.classList.contains("unselect-language")) {
                tag.classList.remove("unselect-language");
            }
        });

        const selectLanguage = document.getElementById("change-language");
        selectLanguage.value = currentLanguage;
    };

    const changeLanguage = () => {
        const selectLanguage = document.getElementById("change-language");
        const selectLang = selectLanguage.options[selectLanguage.selectedIndex].value;
        localStorage.setItem('lang', selectLang);
        setLanguage(selectLang);
    };

    const getLanguage = () => {
        let language = window.navigator.userLanguage || window.navigator.language;
        let lang = language.toLowerCase();
        let localLang = null;

        try {
            localLang = localStorage.getItem('lang');
        } catch (e) {}

        if (localLang !== null) {
            lang = localLang;
        }

        const isExist = document.querySelectorAll(`[data-lang="${lang}"]`);
        if (isExist.length === 0) {
            lang = "en";
        }

        return lang;
    };

    document.getElementById("change-language").addEventListener("change", (e) => {
        changeLanguage();
    });

    try {
        setLanguage(getLanguage());
    } catch (e) {}
})();