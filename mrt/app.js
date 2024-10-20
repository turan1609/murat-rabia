let name1 = "murat and yusuf";
let name2 = "rabia";

// Butonu seç
const button = document.getElementById("myButton");

// Tıklama olayını dinle
button.addEventListener("click", function() {
    // name_current'in innerText'ini kontrol et
    let name_current = document.getElementById("p-tag").innerText;

    if(name_current === name1) {
        document.getElementById("p-tag").innerText = name2;
    } else if (name_current === name2) {
        document.getElementById("p-tag").innerText = name1;
    }
});
