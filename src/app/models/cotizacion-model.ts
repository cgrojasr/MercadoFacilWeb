import { ProductoCarritoModel } from "./producto-model";

export interface CotizacionRequestModel {
    idCotizacion: number;
    // productos: { idProducto: number; cantidad: number; }[];
    productos: ProductoCarritoModel[];
    fechaCreacion: Date;    
}

export interface CotizacionResponseModel {
    idCotizacion: number;
    idNegocio: number;
    logoNegocio: string;
    fechaCreacion: Date;
    totalCotizacion: number;
}