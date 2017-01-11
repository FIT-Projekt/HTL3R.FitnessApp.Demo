document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    algorithmus();
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() {
    window.location = "maintest.html";            
}

function algorithmus(){
    if(localStorage.getItem("split") == "2er-Split"){
        var c, r, t;
        t = document.createElement('table');

        r = t.insertRow(0);
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";

        r = t.insertRow(1); 
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
        c.innerHTML = "Kreuzheben";
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

    }else if(localStorage.getItem("split") == "3er-Split"){
        var c, r, t;
        t = document.createElement('table');

        r = t.insertRow(0);
        c = r.insertCell(0);
        c.colSpan = 3;
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";

        r = t.insertRow(1); 
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
        c.innerHTML = "Kreuzheben";
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;
        
    }else if(localStorage.getItem("split") == "4er-Split"){
        
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
}