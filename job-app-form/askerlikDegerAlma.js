/*
        Burasıda çalışıyor fakat sadece html içinde oluşturulan tipi text olan inputun placeholder değerini değiştiriyor.
        Alt kısımdaki if den itibaren yapıştırılıp denenebilir.

        if(selectKutu_text=="Tecilli"){
        document.getElementById('askerlikQuery').placeholder='Son tecil tarihi nedir?';
        }
        else if(selectKutu_text=="Muaf"){
        document.getElementById('askerlikQuery').placeholder='Muafiyet nedeni nedir?';    
        }
        else if(selectKutu_text=="Yapıldı"){
        document.getElementById('askerlikQuery').placeholder='Terhis tarihi nedir?';    
        }
        else if(selectKutu_text=="--------"){
        document.getElementById('askerlikQuery').placeholder='Lütfen birini seçiniz..'; 
        }
        */

function degerGoster(){
    var selectKutu=document.getElementById('askerlikSelect');
    var selectKutu_value=selectKutu.options[selectKutu.selectedIndex].value; //Burası html içinde tanınan value değerine ulaşıyor.
    var selectKutu_text = selectKutu.options[selectKutu.selectedIndex].text; //Biz direk text değerine ulaşıp if ile devam ettik.
		


    /*
    Bu kısımda kutuların textini kontrol edip gerekli koşullarla bir date inputu veya textboxın placeholderını
    değiştirerek kullanıcıdan bilgi istiyorum.   
    */
        if(selectKutu_text=="Tecilli"){
            document.getElementById('ifMuaf').placeholder="Tecil tarihi belirtiniz."
            var x= document.createElement("INPUT");
            x.id="tecilTarih";
            x.setAttribute("type", "date");
            document.getElementById("askerlikTablo").appendChild(x);
            document.getElementById('terhisTarih').style.display="none";
        }

        else if(selectKutu_text=="Muaf"){
            document.getElementById('ifMuaf').placeholder="Muafiyet nedeni nedir?"
            document.getElementById('terhisTarih').style.display="none";
            
        }

        else if(selectKutu_text=="Yapıldı"){
            document.getElementById('ifMuaf').placeholder="Terhis tarihi belirtiniz."
            var y= document.createElement("INPUT");
            y.id="terhisTarih";
            y.setAttribute("type", "date");
            document.getElementById("askerlikTablo").appendChild(y);
            document.getElementById('tecilTarih').style.display="none";
        }

        else if(selectKutu_text=="--------"){
            document.getElementById('ifMuaf').placeholder="Lütfen birini seçiniz."
            document.getElementById('tecilTarih').style.display="none";
            document.getElementById('terhisTarih').style.display="none";
        }
        
    



}