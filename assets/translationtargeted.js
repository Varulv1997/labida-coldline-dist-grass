if(localStorage.getItem("ChangeLanguageFirstTime") === null) {
doGTranslate('en|fr');
localStorage.setItem("ChangeLanguageFirstTime", true);
}