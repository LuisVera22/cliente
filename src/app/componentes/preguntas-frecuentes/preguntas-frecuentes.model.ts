export interface FaqItem {
    pregunta: string;
    respuesta: string;
}

export interface FaqCategoria {
    id: string;
    titulo: string;
    icono: string;
    preguntas: FaqItem[];
}
