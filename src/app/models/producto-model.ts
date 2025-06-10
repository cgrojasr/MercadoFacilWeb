export interface ProductoCatalogoModel {
    idProducto: number;   // Identificador único del producto
    sku: string; // SKU del producto
    nombre: string; // Nombre del producto
    marca: string; // Marca del producto
    imagen?: string; // URL de la imagen del producto (opcional)
}

export interface ProductoCarritoModel {
    id: number;   // Identificador único del producto
    nombre: string; // Nombre del producto
    cantidad: number; // Cantidad del producto en el carrito    
}