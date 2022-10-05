let id = document.getElementById("btn");
id.addEventListener("click", (e) => {
  e.preventDefault();
  let berat = document.getElementById("berat");
  let tinggi = document.getElementById("tinggi");
  let hasil = document.getElementById("hasil")
  berat = berat.value;
  tinggi = tinggi.value;
  let hitung = berat / Math.pow(tinggi / 100, 2);
  
  if(hitung < 18.5){
    hasil.innerHTML = `Your BMI is <b> ${Math.floor(hitung)} </b> which means You are <b>underweight</b>`
  } else if(hitung >= 18.5 && hitung <= 24.9){
    hasil.innerHTML = `Your BMI is <b> ${Math.floor(hitung)} </b> which means You are <b>normal weight</b>`
  } else if(hitung >= 25 && hitung <= 29.9){
    hasil.innerHTML = `Your BMI is <b> ${Math.floor(hitung)} </b> which means You are <b>overweight</b>`
  } else if(hitung >= 30.0){
    hasil.innerHTML = `Your BMI is <b> ${Math.floor(hitung)} </b> which means You are <b>obesity</b>`
  } else{
    hasil.innerHTML = `You must input right number`
  }

});
