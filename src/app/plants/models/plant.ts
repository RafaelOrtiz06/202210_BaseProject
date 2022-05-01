import { PlantsTypesEnum } from "../enums/plants-types-enum";

// Typescript constructor shorthand
export class Plant {
    constructor(
        public id: number,
        public nombre_comun: string,
        public nombre_cientifico: string,
        public tipo: PlantsTypesEnum,
        public altura_maxima: number,
        public clima: string,
        public sustrato_siembra: string
    ) {}
}