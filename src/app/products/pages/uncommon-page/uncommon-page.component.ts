import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'page-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Álvaro';
  public gender: 'male'| 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public changeClient(): void {
    this.name = 'Lilia';
    this.gender = 'female';
  }

  // i18plural
  public clients: string[]= ['Maria', 'Pedro', 'Fernando', 'Pablo', 'Lilia', 'Álvaro', 'Lia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',

  }

  public deleteClient():void {
    this.clients.shift()
  }

  //KeyValue Pipe
  public person =
  {
    name:'Lilia',
    age: 41,
    address: '... Madrid'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa');
      console.log('tenemos la data de la promesa')
    }, 3500);
  })
}
