Array.prototype.inArray = function(comparer) { 
    for(var i=0; i < this.length; i++) { 
        if(comparer(this[i])) return true; 
    }
    return false; 
}; 

Array.prototype.pushIfNotExist = function(element, comparer) { 
    if (!this.inArray(comparer)) {
        this.push(element);
    }
}; 

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    document.getElementById("settings").addEventListener("click",function(){
        navigator.notification.alert("Diese Funktion ist derzeit noch nicht verfügbar", function(){}, "Fehler", "OK");    
    });
    document.getElementById("info").addEventListener("click",function(){
        window.location = "about.html";
    });
    createTable();
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() {
    window.location = "maintest.html";           
}

//Frauen Anfänger Übungen
var brustUebungenFrauAnf = new Array("Butterfly","Kurzhantelschrägbankdrücken","Reverse-Flies(G)");
var schulterUebungenFrauAnf = new Array("Seitheben","Frontheben(KZ)","Hanteldrücken");
var bizepsUebungenFrauAnf = new Array("Bizepscurls","Hammercurls");
var trizepsUebungenFrauAnf = new Array("Trizepsdrücken(KZ)","Arnold-Dips");
var rueckenUebungenFrauAnf = new Array("Lattzug","Rudern(KZ)","Rückenstrecken");
var bauchUebungenFrauAnf = new Array("Crunches","Beinheben");
var beinPoUebungenFrauAnf = new Array("Beinpresse","Beinstrecker","Kickbacks","Ausfallschritt");

//Frauen Fortgeschritten Übungen
var brustUebungenFrauFort = new Array("Butterfly","Kurzhantelschrägbankdrücken","Reverse-Flies(G)");
var schulterUebungenFrauFort = new Array("Seitheben","Frontheben(KZ)","Hanteldrücken");
var bizepsUebungenFrauFort = new Array("Bizepscurls","Hammercurls");
var trizepsUebungenFrauFort = new Array("Trizepsdrücken(KZ)","Arnold-Dips");
var rueckenUebungenFrauFort = new Array("Lattzug","Rudern(KZ)","Rückenstrecken","Kreuzheben");
var bauchUebungenFrauFort = new Array("Crunches","Beinheben","Reverse-Crunch");
var beinPoUebungenFrauFort = new Array("Beinpresse","Beinstrecker","Kickbacks","Ausfallschritt","Kniebeugen","Abduktoren(G)");

//Mann Anfänger Übungen
var brustUebungenMannAnf = new Array("Bankdrücken","Kurzhantelschrägbankdrücken","Pull Over");
var schulterUebungenMannAnf = new Array("Reverse-Flies(KZ)","Frontheben(KZ)","Kurzhalntelschulterdrücken");
var bizepsUebungenMannAnf = new Array("Bizepscurls","Hammercurls","Langhantelcurls");
var trizepsUebungenMannAnf = new Array("Trizepsdrücken(KZ)","Trizeps-Dips","Stirndrücken");
var rueckenUebungenMannAnf = new Array("Lattzug","Rudern(KZ)","Klimmzüge");
var bauchUebungenMannAnf = new Array("Crunches","Sit-Ups");
var beinPoUebungenMannAnf = new Array("Beinpresse","Beinstrecker","Abduktion(KZ)");

//Mann Fortgeschritten Übungen
var brustUebungenMannFort = new Array("Bankdrücken","Kurzhantelschrägbankdrücken","Pull Over","Reverse-Flies(G)");
var schulterUebungenMannFort = new Array("Reverse-Flies(KZ)","Frontheben(KZ)","Kurzhalntelschulterdrücken","Seitheben");
var bizepsUebungenMannFort = new Array("Bizepscurls","Hammercurls","Langhantelcurls","Kurzhantelbizepscurls");
var trizepsUebungenMannFort = new Array("Trizepsdrücken(KZ)","Trizeps-Dips","Stirndrücken");
var rueckenUebungenMannFort = new Array("Lattzug","Rudern(KZ)","Klimmzüge","Kreuzheben","Langhantelrudern");
var bauchUebungenMannFort = new Array("Crunches","Sit-Ups","Reverse-Crunch","Sit-Ups-negativ");
var beinPoUebungenMannFort = new Array("Beinpresse","Beinstrecker","Abduktion(KZ)","Kniebeugen","stehendes Wadenheben");

var brust = [];
var schulter = [];
var bizeps = [];
var trizeps = [];
var ruecken = [];
var bauch = [];
var beinPo = [];

var c, r, t, b;

function checkData2(){
    if(localStorage.getItem("geschlaecht") == "Frau"){
        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 2){
                var element = brustUebungenFrauAnf[Math.round(Math.random()*(brustUebungenFrauAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenFrauAnf[Math.round(Math.random()*(schulterUebungenFrauAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauAnf[Math.round(Math.random()*(bizepsUebungenFrauAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauAnf[Math.round(Math.random()*(trizepsUebungenFrauAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenFrauAnf[Math.round(Math.random()*(rueckenUebungenFrauAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauAnf[Math.round(Math.random()*(bauchUebungenFrauAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenFrauAnf[Math.round(Math.random()*(beinPoUebungenFrauAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

           while(brust.length < 2){
                var element = brustUebungenFrauFort[Math.round(Math.random()*(brustUebungenFrauFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenFrauFort[Math.round(Math.random()*(schulterUebungenFrauFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauFort[Math.round(Math.random()*(bizepsUebungenFrauFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauFort[Math.round(Math.random()*(trizepsUebungenFrauFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenFrauFort[Math.round(Math.random()*(rueckenUebungenFrauFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauFort[Math.round(Math.random()*(bauchUebungenFrauFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenFrauFort[Math.round(Math.random()*(beinPoUebungenFrauFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    } else {

        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 2){
                var element = brustUebungenMannAnf[Math.round(Math.random()*(brustUebungenMannAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenMannAnf[Math.round(Math.random()*(schulterUebungenMannAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannAnf[Math.round(Math.random()*(bizepsUebungenMannAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenMannAnf[Math.round(Math.random()*(trizepsUebungenMannAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenMannAnf[Math.round(Math.random()*(rueckenUebungenMannAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannAnf[Math.round(Math.random()*(bauchUebungenMannAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenMannAnf[Math.round(Math.random()*(beinPoUebungenMannAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

            while(brust.length < 2){
                var element = brustUebungenMannFort[Math.round(Math.random()*(brustUebungenMannFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenMannFort[Math.round(Math.random()*(schulterUebungenMannFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannFort[Math.round(Math.random()*(bizepsUebungenMannFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenMannFort[Math.round(Math.random()*(trizepsUebungenMannFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenMannFort[Math.round(Math.random()*(rueckenUebungenMannFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannFort[Math.round(Math.random()*(bauchUebungenMannFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenMannFort[Math.round(Math.random()*(beinPoUebungenMannFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    }
}

function checkData3(){
    if(localStorage.getItem("geschlaecht") == "Frau"){
        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenFrauAnf[Math.round(Math.random()*(brustUebungenFrauAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauAnf[Math.round(Math.random()*(schulterUebungenFrauAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauAnf[Math.round(Math.random()*(bizepsUebungenFrauAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauAnf[Math.round(Math.random()*(trizepsUebungenFrauAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauAnf[Math.round(Math.random()*(rueckenUebungenFrauAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauAnf[Math.round(Math.random()*(bauchUebungenFrauAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenFrauAnf[Math.round(Math.random()*(beinPoUebungenFrauAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

           while(brust.length < 3){
                var element = brustUebungenFrauFort[Math.round(Math.random()*(brustUebungenFrauFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauFort[Math.round(Math.random()*(schulterUebungenFrauFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauFort[Math.round(Math.random()*(bizepsUebungenFrauFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauFort[Math.round(Math.random()*(trizepsUebungenFrauFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauFort[Math.round(Math.random()*(rueckenUebungenFrauFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauFort[Math.round(Math.random()*(bauchUebungenFrauFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 3){
                var element = beinPoUebungenFrauFort[Math.round(Math.random()*(beinPoUebungenFrauFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    } else {

        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenMannAnf[Math.round(Math.random()*(brustUebungenMannAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannAnf[Math.round(Math.random()*(schulterUebungenMannAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannAnf[Math.round(Math.random()*(bizepsUebungenMannAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannAnf[Math.round(Math.random()*(trizepsUebungenMannAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannAnf[Math.round(Math.random()*(rueckenUebungenMannAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannAnf[Math.round(Math.random()*(bauchUebungenMannAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 3){
                var element = beinPoUebungenMannAnf[Math.round(Math.random()*(beinPoUebungenMannAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

            while(brust.length < 3){
                var element = brustUebungenMannFort[Math.round(Math.random()*(brustUebungenMannFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannFort[Math.round(Math.random()*(schulterUebungenMannFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 3){
                var element = bizepsUebungenMannFort[Math.round(Math.random()*(bizepsUebungenMannFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannFort[Math.round(Math.random()*(trizepsUebungenMannFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannFort[Math.round(Math.random()*(rueckenUebungenMannFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 3){
                var element = bauchUebungenMannFort[Math.round(Math.random()*(bauchUebungenMannFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenMannFort[Math.round(Math.random()*(beinPoUebungenMannFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    }
}

function checkData4(){
    if(localStorage.getItem("geschlaecht") == "Frau"){
        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenFrauAnf[Math.round(Math.random()*(brustUebungenFrauAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauAnf[Math.round(Math.random()*(schulterUebungenFrauAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauAnf[Math.round(Math.random()*(bizepsUebungenFrauAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauAnf[Math.round(Math.random()*(trizepsUebungenFrauAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauAnf[Math.round(Math.random()*(rueckenUebungenFrauAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauAnf[Math.round(Math.random()*(bauchUebungenFrauAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenFrauAnf[Math.round(Math.random()*(beinPoUebungenFrauAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

           while(brust.length < 3){
                var element = brustUebungenFrauFort[Math.round(Math.random()*(brustUebungenFrauFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauFort[Math.round(Math.random()*(schulterUebungenFrauFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauFort[Math.round(Math.random()*(bizepsUebungenFrauFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauFort[Math.round(Math.random()*(trizepsUebungenFrauFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauFort[Math.round(Math.random()*(rueckenUebungenFrauFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 3){
                var element = bauchUebungenFrauFort[Math.round(Math.random()*(bauchUebungenFrauFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 5){
                var element = beinPoUebungenFrauFort[Math.round(Math.random()*(beinPoUebungenFrauFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    } else {

        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenMannAnf[Math.round(Math.random()*(brustUebungenMannAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannAnf[Math.round(Math.random()*(schulterUebungenMannAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannAnf[Math.round(Math.random()*(bizepsUebungenMannAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannAnf[Math.round(Math.random()*(trizepsUebungenMannAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannAnf[Math.round(Math.random()*(rueckenUebungenMannAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannAnf[Math.round(Math.random()*(bauchUebungenMannAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 3){
                var element = beinPoUebungenMannAnf[Math.round(Math.random()*(beinPoUebungenMannAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

            while(brust.length < 3){
                var element = brustUebungenMannFort[Math.round(Math.random()*(brustUebungenMannFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannFort[Math.round(Math.random()*(schulterUebungenMannFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 3){
                var element = bizepsUebungenMannFort[Math.round(Math.random()*(bizepsUebungenMannFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannFort[Math.round(Math.random()*(trizepsUebungenMannFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannFort[Math.round(Math.random()*(rueckenUebungenMannFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 3){
                var element = bauchUebungenMannFort[Math.round(Math.random()*(bauchUebungenMannFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenMannFort[Math.round(Math.random()*(beinPoUebungenMannFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    }
}

function createFile(){
    var doc = new jsPDF();
    doc.text(20, 20, localStorage.getItem("geschlaecht"));
    doc.text(20, 40, localStorage.getItem("erfahrung"));
    doc.text(20, 60, localStorage.getItem("typ"));
    doc.text(20, 80, localStorage.getItem("art"));
    doc.text(20, 100, localStorage.getItem("split"));
    var pdfOutput = doc.output();
    if(device.platform == "Android"){
        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir){
            dir.getFile("Trainingsplan.pdf", {create: true}, function (file){
                file.createWriter(function(writer){
                    writer.write( pdfOutput );
                },function(error){
                    alert("Error" + error);
                });
                navigator.notification.alert("Dein Trainingsplan befinet sich nun unter: " + "\n\n" + file.toURL(), function(){}, "Erfolgreich als PDF exportiert", "OK");
            });
        });
    }else if(device.platform == "iOS"){
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir){
            dir.getFile("Trainingsplan.pdf", {create: true}, function (file){
                file.createWriter(function(writer){
                    writer.write( pdfOutput );
                },function(error){
                    alert("Error" + error);
                });
                navigator.notification.alert("Dein Trainingsplan befinet sich nun unter: " + "\n\n" + file.toURL(), function(){}, "Erfolgreich als PDF exportiert", "OK");
            });
        });
    }
}

function createTable(){
    if(localStorage.getItem("split") == "2er-Split"){
        checkData2();
        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc"; 
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = brust[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = brust[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = schulter[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = schulter[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(7); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(8); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(9); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);


        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 2";
        c.style.fontWeight = "bold";

        r = t.insertRow(1); 
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = bauch[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = bauch[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(7); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

       

        document.body.appendChild(t);

        t.style.marginTop = "8px";

    }else if(localStorage.getItem("split") == "3er-Split"){ 
        checkData3();

        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = brust[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = brust[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = brust[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = schulter[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = schulter[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(7); 
        c = r.insertCell(0);
        c.innerHTML = schulter[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 2";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";


        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 3";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";
        
    }else if(localStorage.getItem("split") == "4er-Split"){
        checkData4();

        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = brust[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = brust[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = brust[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;        

        document.body.appendChild(t);

        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 2";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";

        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 3";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = schulter[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = schulter[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = schulter[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";


        t = document.createElement('table');

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 4";
        c.style.fontWeight = "bold";

        r = t.insertRow(1);
        r.className = "desc"; 
        c = r.insertCell(0);
        c.innerHTML = "Übung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Sätze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = bauch[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = bauch[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";      
    }

    b = document.createElement("button");
    b.id = "export";
    b.appendChild(document.createTextNode("Export to PDF"));
    document.body.appendChild(b);
    b.addEventListener("click",function(){
        createFile();
    });
}
