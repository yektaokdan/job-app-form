//Kod düzenlenecek şu an çalışmıyor. Aşağıdaki kodlar input çıkışları ekliyo, bizim option eklememiz lazım.

/*
var yeniHucre =  yeniSatir.insertCell();
        var eleman = document.createElement("select");
            eleman.id="dilSelect";
            yeniHucre.appendChild(eleman);
            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "volvocar");
            var t = document.createTextNode("Orta");
            var y = document.createTextNode("İyi");
            var z = document.createTextNode("Çok iyi");
            eleman.appendChild(t,y,z);
            document.getElementById("dilSelect").appendChild(eleman);
            */
function yeniDil(){
    var tabloGovde=document.getElementById('dil').getElementsByTagName('tbody')[0];
    
    var table = document.getElementById('dil');
    
    var satirSayisi = table.rows.length-2;
    var num=satirSayisi+1;
    var yeniSatir=tabloGovde.insertRow(num);
    
    var yeniHucre=yeniSatir.insertCell();
    var eleman = document.createElement("INPUT");
        eleman.setAttribute("type", "text");
        eleman.setAttribute("placeholder", "Dil..");
        eleman.setAttribute("id", "dilAdi"+num);
        yeniHucre.appendChild(eleman);
    
    

        //Eklenen satırın okuma alanı
        var yeniHucre =  yeniSatir.insertCell();
        var eleman = document.createElement("select");
            eleman.id="okumaSelect";
            yeniHucre.appendChild(eleman);

            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol1");
            var t = document.createTextNode("Orta");
            eleman.appendChild(t);
            document.getElementById("okumaSelect").appendChild(eleman);
            
            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol2");
            var y = document.createTextNode("İyi");
            eleman.appendChild(y);
            document.getElementById("okumaSelect").appendChild(eleman);

            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol3");
            var z = document.createTextNode("Çok iyi");
            eleman.appendChild(z);
            document.getElementById("okumaSelect").appendChild(eleman);


        //Eklenen satırın yazma alanı
        var yeniHucre =  yeniSatir.insertCell();
        var eleman = document.createElement("select");
            eleman.id="yazmaSelect";
            yeniHucre.appendChild(eleman);

            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol1");
            var t = document.createTextNode("Orta");
            eleman.appendChild(t);
            document.getElementById("yazmaSelect").appendChild(eleman);
            
            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol2");
            var y = document.createTextNode("İyi");
            eleman.appendChild(y);
            document.getElementById("yazmaSelect").appendChild(eleman);

            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol3");
            var z = document.createTextNode("Çok iyi");
            eleman.appendChild(z);
            document.getElementById("yazmaSelect").appendChild(eleman);

        
        //Eklenen satırların konuşma alanı.
        var yeniHucre =  yeniSatir.insertCell();
        var eleman = document.createElement("select");
            eleman.id="konusmaSelect";
            yeniHucre.appendChild(eleman);

            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol1r");
            var t = document.createTextNode("Orta");
            eleman.appendChild(t);
            document.getElementById("konusmaSelect").appendChild(eleman);
            
            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol2");
            var y = document.createTextNode("İyi");
            eleman.appendChild(y);
            document.getElementById("konusmaSelect").appendChild(eleman);

            var eleman = document.createElement("OPTION");
            eleman.setAttribute("value", "vol3");
            var z = document.createTextNode("Çok iyi");
            eleman.appendChild(z);
            document.getElementById("konusmaSelect").appendChild(eleman);
        }