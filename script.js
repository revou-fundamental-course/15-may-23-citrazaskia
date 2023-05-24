   function hitungLuas(){
    var sisiLuas=document.getElementById("sisi-luas").value;
    outputLuas=sisiLuas*sisiLuas
 
    document.getElementById("rumus-luas").innerHTML="L = S x S"
    document.getElementById("perhitungan-luas").innerHTML="L = "+sisiLuas +" "+ "x"+" " +sisiLuas
    document.getElementById("output-luas").innerHTML="L ="+outputLuas
   }
   function hitungKeliling(){
    var sisiKeliling=document.getElementById("sisi-keliling").value;
    outputKeliling=4*sisiKeliling
 
    document.getElementById("rumus-keliling").innerHTML="K = 4 x S"
    document.getElementById("perhitungan-keliling").innerHTML="K = 4" +" "+ "x"+" " +sisiKeliling
    document.getElementById("output-keliling").innerHTML="K = "+outputKeliling
   }

   function reset1() {
    document.getElementById('sisi-luas').value = ''
    document.getElementById('rumus-luas').innerHTML= ''
    document.getElementById('perhitungan-luas').innerHTML = ''
    document.getElementById('output-luas').innerHTML = ''

 }function reset2() {
    document.getElementById('sisi-keliling').value = ''
    document.getElementById('rumus-keliling').innerHTML= ''
    document.getElementById('perhitungan-keliling').innerHTML = ''
    document.getElementById('output-keliling').innerHTML = ''
 }
 
  
   
 
