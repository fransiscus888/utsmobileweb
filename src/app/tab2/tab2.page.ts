import { Component } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isiData : Observable<data[]>
  isiDataColl : AngularFirestoreCollection<data>
  Judul : string;
  Isi: string;
  Tanggal: string;
  Nilainote : number;
  constructor(
    afs : AngularFirestore,
    private router: Router
  ) {
    this.isiDataColl = afs.collection('data coba')
    this.isiData = this.isiDataColl.valueChanges()
  }

  detail(judul,isi,tanggal,nilainote,image){
    this.router.navigate(['/tab3',judul,isi,tanggal,nilainote,image]);
  }

}

interface data{
  judul : string,
  isi: string,
  tanggal: string,
  nilainote: number
}