import { Salon } from "../salon/salon";

export interface ImagenSalon {
    id? : number;
    salon? : Salon;
    urlImagen : string;
    esPrincipal : boolean;
}
