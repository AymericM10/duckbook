import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const apiUrl = '/api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private http: HttpClient) {}

  livres: any = [];

  ngOnInit() {
    this.http
        .post(`${apiUrl}`,
            {
                action: 'getLivres'
            })
        .subscribe(data => {
          // On affecte le résultats à notre variable livre
            console.log(data);
          // this.livres = data['body']['results'];
        }, (error) => {
          console.log(error);
        });

  }

}
