export interface SalonDTO {
    id : number;
    usuarioid : number;
    telefono : string;
    nombre : string;
    descripcion : string;
    capacidad : number;
    direccion : string;
    region : string;
    precio : number;
    categorias : string[];
    tipoeventos : string[];
    imagenes: string[];
    badge?: string;
}
