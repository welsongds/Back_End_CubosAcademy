const nome = 'W e l s o n Gomes da Silva';

function gerandoNickname(name) {
    while (name !== name.replace(" ", "")) {
        name = name.replace(" ", "");
    }
    name = name.toLowerCase();
    if (name.length < 13) {
        name = name.padStart(name.length + 1, "@")
    } else {
        name = name.slice(0, 12)
        name = name.padStart(name.length + 1, "@")
    }
    return name
}
console.log(gerandoNickname(nome));