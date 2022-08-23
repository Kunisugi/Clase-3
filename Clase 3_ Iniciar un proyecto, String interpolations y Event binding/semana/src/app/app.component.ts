import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Julio';
  public contador: number = 0;
  public scroll: number = 0;
  public alto: number= 300;
  public ancho: number= 300;
  public mostrar: boolean = false;
  public color: string = "";
  public imagen: string = 'https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg';
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public aumentarContador(): void {
    this.contador = this.contador + 1;
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }
  public capturarAlto(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }
  public capturarAncho(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.ancho = valor;
  }

  public capturarColor(event: Event): void{
    const color = (event.target as HTMLInputElement).value;
    this.color = color;
  }

}
