const toggebutton   = document.getElementById('toggleButton');
const daftar        = document.getElementById('daftarIsi');

daftar.classList.toggle('hidden');

toggebutton.addEventListener('click', ()=>{
    daftar.classList.toggle('hidden');
});
