import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  judul
  isi
  tanggal
  nilainote
  image
  constructor(private route: ActivatedRoute) {

  }
  async ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.judul =params.get('judul');
    this.isi =params.get('isi');
    this.tanggal =params.get('tanggal');
    this.nilainote =params.get('nilainote');
    this.image =params.get('image');
  }
}
