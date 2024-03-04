interface Grupomusical {
    Nombregrupo: string;
    Añofundación: number;
    Activo: boolean;
    Géneromusical: string;
};

const Grupo1: Grupomusical = {
    Nombregrupo: "The Beatles",
    Añofundación: 1960,
    Activo: true,
    Géneromusical: "🎵 Pop Rock",
};
const estiloTítulo = "color:green; font-size:16px; font-style: bold;";
Grupo1.Nombregrupo = "%cThe Beatles", estiloTítulo;
console.log(Grupo1);

const Grupo2: Grupomusical = {
    Nombregrupo: "Queen",
    Añofundación: 1970,
    Activo: false,
    Géneromusical: "🎸 Rock",
};

Grupo1.Nombregrupo = "%cQueen", estiloTítulo;
console.log(Grupo2);

const Grupo3: Grupomusical = {
    Nombregrupo: "AC DC",
    Añofundación: 1973,
    Activo: true,
    Géneromusical: "🤘 Hard Rock",
};

Grupo1.Nombregrupo = "%cAC DC", estiloTítulo;
console.log(Grupo3);

const Grupo4: Grupomusical = {
    Nombregrupo: "Ludwig van Beethoven",
    Añofundación: 1770,
    Activo: false,
    Géneromusical: "🎼 Clásica",
};

Grupo1.Nombregrupo = "%cLudwig van Beethoven", estiloTítulo;
console.log(Grupo4);

const Grupo5: Grupomusical = {
    Nombregrupo: "The Rolling Stones",
    Añofundación: 1962,
    Activo: true,
    Géneromusical: "🎸 Rock",
};

Grupo1.Nombregrupo = "%cThe Rolling Stones", estiloTítulo;
console.log(Grupo5);
