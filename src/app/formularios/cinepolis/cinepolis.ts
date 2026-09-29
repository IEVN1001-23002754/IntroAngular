import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})

export class Cinepolis 
{
  nombre: string = '';
  cantidadCompradores: number = 0;
  tieneTarjetaCineco: string = 'no'; 
  cantidadBoletas: number = 0;

  totalPagar: number = 0;
  mensajeError: string = '';
  mensajeExito: string = '';

  procesarCompra(): void 
  {
    // Limpiar mensajes previos
    this.mensajeError = '';
    this.mensajeExito = '';
    this.totalPagar = 0;

    // Validar que el nombre no este vacio
    if (!this.nombre) 
    {
      this.mensajeError = 'Por favor, ingrese el nombre del comprador.';
      return;
    }

    // Validar que los compradores y boletos no esten vacios
    if (this.cantidadCompradores <= 0 || this.cantidadBoletas <= 0) 
    {
      this.mensajeError = 'La cantidad de compradores y de boletas debe ser mayor a cero.';
      return;
    }

    // No se pueden comprar mas de 7 boletas por persona
    const maxPermitido = this.cantidadCompradores * 7;
    if (this.cantidadBoletas > maxPermitido) 
    {
      this.mensajeError = `Error: No se pueden comprar más de 7 boletos por persona. El máximo para ${this.cantidadCompradores} comprador(es) es de ${maxPermitido} boletos.`;
      return;
    }

    // Cada boleta cuesta $12.000
    const precioUnitario = 12000;
    let subtotal = this.cantidadBoletas * precioUnitario;
    let descuentoPorcentaje = 0;
    let descCantidadTexto = '0%';

    // Aplicar descuentos segun la cantidad de boletos
    if (this.cantidadBoletas > 5) 
    {
      descuentoPorcentaje = 0.15; // 15% de descuento
      descCantidadTexto = '15%';
    } 
    else if (this.cantidadBoletas >= 3 && this.cantidadBoletas <= 5) 
    {
      descuentoPorcentaje = 0.10; // 10% de descuento
      descCantidadTexto = '10%';
    } 
    else 
    {
      descuentoPorcentaje = 0.0;  // 2 o menos sin descuento
      descCantidadTexto = '0%';
    }

    let valorConDescuentoCantidad = subtotal - (subtotal * descuentoPorcentaje);
    let tieneAdicionalCineco = (this.tieneTarjetaCineco == 'si');

    // Aplicar descuento adicional del 10% si tiene Tarjeta CINECO
    if (tieneAdicionalCineco) 
    {
      valorConDescuentoCantidad = valorConDescuentoCantidad - (valorConDescuentoCantidad * 0.10);
    }

    this.totalPagar = valorConDescuentoCantidad;

    // Construccion del mensaje detallado
    let descDetalle = descCantidadTexto;
    if (tieneAdicionalCineco) 
    {
      descDetalle += ' + 10% adicional por Tarjeta Cineco';
    }

    this.mensajeExito = `Compra para ${this.cantidadBoletas} personas con ${this.cantidadCompradores} comprador(es) procesada con éxito. Tienes ${descDetalle} de descuento.`;
  }

  salir(): void 
  {
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.cantidadBoletas = 0;
    this.tieneTarjetaCineco = 'no';
    this.totalPagar = 0;
    this.mensajeError = '';
    this.mensajeExito = '';
  }
}
