import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore} from '@angular/fire/firestore'
import { FotoService } from '../foto.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isiData : Observable<data[]>
  isiDataColl : AngularFirestoreCollection<data>
  Judul : string;
  Isi: string;
  Tanggal: string;
  Nilainote : number=0;
  constructor(
    afs : AngularFirestore,
    public fotoService: FotoService,
    public afStorage : AngularFireStorage
  ) {
    this.isiDataColl = afs.collection('data coba')
    this.isiData = this.isiDataColl.valueChanges()
  }

  TambahFoto(){
    this.fotoService.tambahFoto();
  }


  simpan(foto){
      var urlImageStorage = [];
      const imgFilePath = `imgStorage/${this.fotoService.dataFoto[0].filePath}`;
      this.afStorage
        .upload(imgFilePath, this.fotoService.dataFoto[0].dataImage)
        .then(() => {
          this.afStorage.storage
            .ref()
            .child(imgFilePath)
            .getDownloadURL()
            .then((url) => {
              this.isiDataColl.doc(this.Judul).set({
                judul:this.Judul,
                isi:this.Isi,
                tanggal:this.Tanggal,
                nilainote:this.Nilainote,
                image:url
              });
              this.Judul="";
              this.Isi="";
              this.Tanggal="";
              this.Nilainote=0;  
              this.fotoService.clear();
              urlImageStorage.unshift(url);
              
            });
        });
        
    alert("berhasil add ke database");
    
  }
}

interface data{
  judul : string,
  isi: string,
  tanggal: string,
  nilainote: number
  image:string
}
