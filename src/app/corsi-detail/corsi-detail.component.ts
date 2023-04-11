import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CorsiService } from '../service/corsi.service';
import { ICorso } from '../models/corso-interface';
import { of, switchMap } from 'rxjs';
import { Location } from '@angular/common';

@Component({
    selector: 'app-corsi-detail',
    templateUrl: './corsi-detail.component.html',
    styleUrls: ['./corsi-detail.component.css']
})
export class CorsiDetailComponent implements OnInit {

    elementoIessimoOggettoCorso?: ICorso;


    constructor(private route: ActivatedRoute, private corsiService: CorsiService, private location: Location) {


    };//! funzione CREATA constructor



    valoreDelSegnaPosto: string = "";
    
    

    // !opzione1 PIU' moderno

    sub: any 
    ngOnInit(): void {

        this.sub = this.route.params.subscribe(
            (params) => {
                console.log(params["id"]);

                this.valoreDelSegnaPosto = params["id"];
        })

        console.log(this.sub);//! esso mi ritorna un'oggetto chiamato "SafeSubscriber "
        

        this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);
       
    };//! funzione CREATA ngOnInit
    // !opzione1

    tornaIndietro() {
        this.location.back();



    }; //!funzione CREATA tornaIndietro





    //! opzione2 usando l'oggetto snapshot
    // ngOnInit(): void {

    //     this.valoreDelSegnaPosto = this.route.snapshot.params["id"];

    //     this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);

        
    // };//! funzione CREATA ngOnInit
    //! opzione2





    
    //! opzione3 usando il metodo get
    messagioDiErrore?: string;

    // ngOnInit(): void {

    //     // *opzione1
    //     // const valoreSegnaposto = this.route.snapshot.paramMap.get("id");
    //     // this.valoreDelSegnaPosto = valoreSegnaposto!;
    //     // *opzione1


    //     // *opzione2
    //     const valoreSegnaposto = this.route.snapshot.paramMap.get("id");
    //     if (valoreSegnaposto != null) {
    //         this.valoreDelSegnaPosto = valoreSegnaposto;//! quindi verrà mostrato il corso

    //         this.messagioDiErrore = undefined;//! quindi non verrà mostrato il messaggio di errore 
            
    //     }
    //     else if (valoreSegnaposto == null) {
    //         this.messagioDiErrore = "Parametro id non trovato";//! quindi verrà mostrato il messaggio di errore
    //         this.elementoIessimoOggettoCorso = undefined;//! quindi non verrà mostrato il corso


    //     }
    //     // *opzione2


    
    //     this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);

        
    // };//! funzione CREATA ngOnInit
    //! opzione3





    //! opzione4 usando la pipe
    // ngOnInit(): void {

    //     this.route.paramMap.pipe(
    //         // !  "this.route.paramMap.pipe" mi ritorna un "Observable" con generix "<string | null>"  per cui per PRENDERE il valore di tale "Observable" devo per forza usare il metodo "subscribe()"
    //         switchMap((params: ParamMap) =>
    //         // !  "switchMap" è un operatore della pipe e l' importiamo dalla libreia "rxjs"

    //         // ! "ParamMap" è un'interface nativa di Angular
    //             of(params.get('id'))
    //             // ! "of" l' importiamo dalla libreia "rxjs"
    //         )
    //     ).subscribe(d => {

    //         console.log(d);//! in questo caso esso mi ritorna un numero di tipo "string"
            
    //         this.valoreDelSegnaPosto = d!;//! uso il punto esclamativo (!) per dire al browser che il valore di tale "Observable" sarà SEMPRE diverso da null

    //     });



    //     this.elementoIessimoOggettoCorso = this.corsiService.prendereCorsiDetail(this.valoreDelSegnaPosto);

        
    // };//! funzione CREATA ngOnInit
    //! opzione4






};//! classe(componente) CorsiDetailComponent



