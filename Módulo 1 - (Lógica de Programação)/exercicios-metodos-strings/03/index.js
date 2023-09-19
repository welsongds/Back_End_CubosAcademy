const texto = "Aprenda programar do zero na Cubos Academy";
let url = "";

function transformandoEmURL(string) {
    while (string !== string.replace(" ", "-")) {
        string = string.replace(" ", "-");
    }
    return string.toLowerCase();
}
console.log(transformandoEmURL(texto));
