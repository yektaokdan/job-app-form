function tarihAl(){
    var yil= new Date();
    var ay= new Date();
    var gun= new Date();
    var currentYear=yil.getUTCFullYear();
    var currentMonth=ay.getUTCMonth();
    var currentDay=gun.getUTCDay();
    document.getElementById('basvuruTarihi').innerHTML='<b> başvuru tarihi</b><span class="ml-5">:</span>'+ ' '+currentDay+"/"+currentMonth+"/"+currentYear;
}
function pozisyonYaz(){
    document.getElementById('pozisyonDegisim').innerHTML='<b> başvurulan pozisyon</b> <span class="ml-5">:</span>'+' '+' Yazılım Mühendisi'
}