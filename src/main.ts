interface grupoMusical {
  nombreGrupo: string;
  yearFundacion: number;
  activo: boolean;
  generoMusical: string;
}

const poprock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardrock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

const estiloTitulo = "color:green; font-size:16px; font-style: bold;";

const Grupo1: grupoMusical = {
  nombreGrupo: "The Beatles",
  yearFundacion: 1960,
  activo: true,
  generoMusical: "🎵 Pop Rock",
};

console.log(
  `%c ${Grupo1.nombreGrupo}`, estiloTitulo,
  `El año de su fundación es ${Grupo1.yearFundacion}, es ${Grupo1.activo} que sigue activo y pertenece al género musical ${poprock}`
);


const Grupo2: grupoMusical = {
  nombreGrupo: "Queen",
  yearFundacion: 1970,
  activo: false,
  generoMusical: "🎸 Rock",
};

console.log(
    `%c ${Grupo2.nombreGrupo}`,estiloTitulo,
    `El año de su fundación es ${Grupo2.yearFundacion}, es ${Grupo2.activo} que sigue activo, y su género musical es ${Grupo2.generoMusical}`
);

const Grupo3: grupoMusical = {
  nombreGrupo: "AC DC",
  yearFundacion: 1973,
  activo: true,
  generoMusical: "🤘 Hard Rock",
};

console.log(
    `%c ${Grupo3.nombreGrupo}`,estiloTitulo,
    `El año de su fundación es ${Grupo3.yearFundacion}, es ${Grupo3.activo} que sigue activo, y su género musical es ${Grupo3.generoMusical}`
);

const Grupo4: grupoMusical = {
  nombreGrupo: "Ludwig van Beethoven",
  yearFundacion: 1770,
  activo: false,
  generoMusical: "🎼 Clásica",
};

console.log(
    `%c ${Grupo4.nombreGrupo}`,estiloTitulo,
    `El año de su fundación es ${Grupo4.yearFundacion}, es ${Grupo4.activo} que sigue activo, y su género musical es ${Grupo4.generoMusical}`
);

const Grupo5: grupoMusical = {
  nombreGrupo: "The Rolling Stones",
  yearFundacion: 1962,
  activo: true,
  generoMusical: "🎸 Rock",
};

console.log(
    `%c ${Grupo5.nombreGrupo}`,estiloTitulo,
    `El año de su fundación es ${Grupo5.yearFundacion}, es ${Grupo5.activo} que sigue activo, y su género musical es ${Grupo5.generoMusical}`
);
