import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const apiUrl = 'http://dev.aymericmayeur.com/duckbook-api/getLivres.php';

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
        .get(`${apiUrl}`,
            {
                params: {
                    action: 'getLivres'
                },
                observe: 'response'
            })
        .subscribe(data => {
          // On affecte le résultats à notre variable livre
            this.livres = data.body['results'];
        }, (error) => {
          console.log(error);
        });

  }

}
