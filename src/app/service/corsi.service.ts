import { Injectable } from '@angular/core';
import { ICorso } from '../models/corso-interface';
import { CORSI } from '../models/corsi-dati';
import { Contatti, IContatti, IRispostaServer } from '../models/contatti-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CorsiService {

    constructor(private http: HttpClient) { }

    prendereCorsi(): ICorso[] {

        return CORSI;

    };//! funzione CREATA prendereCorsi




    // todo  opzione1 usando il metodo find
    prendereCorsiDetail(valoreDelSegnaposto: string): ICorso | undefined   {

        let elementoIessimoOggettoCorsoFound = CORSI.find((elementoIessimoOggetto) => {

            return (elementoIessimoOggetto.id == Number(valoreDelSegnaposto));
        });


        if (elementoIessimoOggettoCorsoFound != undefined) {
             return elementoIessimoOggettoCorsoFound;

        }
        return undefined;

    };//! funzione CREATA prendereCorsiDetail
    // todo  opzione1



    // todo  opzione2 usando l'indice dell' array CORSI
    // prendereCorsiDetail(valoreDelSegnaposto: string): ICorso {
    //     // ! let CORSI = [{oggetto1}, {oggetto2}, {oggetto3}]

    //     // *opzione1
    //     // let indiceElementoIessimoOggettoCorsoDellArrayCorsi = +(valoreDelSegnaposto) - 1;
    //     // *opzione1
    //     // *opzione2
    //     let indiceElementoIessimoOggettoCorsoDellArrayCorsi = Number(valoreDelSegnaposto) - 1;
    //     console.log(indiceElementoIessimoOggettoCorsoDellArrayCorsi);//! esso mi ritorna un numero di tipo number
    //     // *opzione2

    //     return CORSI[indiceElementoIessimoOggettoCorsoDellArrayCorsi];

    // };//! funzione CREATA prendereCorsiDetail
    // todo  opzione2





    inviareUtenteRegistratoAlServer(utenteRegistrato: Contatti): Observable<IRispostaServer> {

        return this.http.post<IRispostaServer>(environment.CONTATTI_API_BASE_URL, utenteRegistrato);


    };//! funzione CREATA inviareUtenteRegistratoAlServer





};//! servizio CorsiService
