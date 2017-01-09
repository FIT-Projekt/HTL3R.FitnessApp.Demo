document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    algorithmus();
}

function algorithmus(){
    if(localStorage.getItem("split") == "2er-Split"){
        alert("ja 2er-Split");
    }else if(localStorage.getItem("split") == "3er-Split"){
        alert("ja 3er-Split");
    }else if(localStorage.getItem("split") == "4er-Split"){
        alert("ja 4er-Split");
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