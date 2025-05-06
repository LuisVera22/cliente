import { CaracteristicaSalon } from "../caracteristica-salon/caracteristica-salon";
import { ImagenSalon } from "../imagen-salon/imagen-salon";
import { Region } from "../region/region";
import { TipoEvento } from "../tipo-evento/tipo-evento";
import { Usuario } from "../usuario/usuario";

export interface Salon {
    id? : number;
    usuario : Usuario;
    nombre : string;
    descripcion : string;
    capacidad : number;
    direccion : string;
    region : Region;
    precioBase : number;
    caracteristicas : CaracteristicaSalon[];
    tiposEvento : TipoEvento[];
    imagenes : ImagenSalon[];
}
