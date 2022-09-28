(self["webpackChunkfamily_nails"] = self["webpackChunkfamily_nails"] || []).push([[177],{

/***/ 576:
/***/ (() => {

document.addEventListener('DOMContentLoaded', () => {
    const headerMenuButton = document.querySelector('.menu-button.header__menu-button')
    headerMenuButton.addEventListener('click', function() {
        this.classList.toggle('active');
    });


    document.querySelectorAll('.header__list-item').forEach(link => {
        link.addEventListener('click', function() {
            headerMenuButton.classList.remove('active');
        });
    })

    document.querySelector('body').classList.remove("disable-transition")
})


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(576));
/******/ }
]);