const form = document.getElementById('contact-form');
const judul = document.getElementById('judul');
const deskripsi = document.getElementById('deskripsi');
const foto = document.getElementById('foto');
const durasi = document.getElementById('durasi');
const lokasi = document.getElementById('lokasi');
const catatan = document.getElementById('catatan');

form.addEventListener('Submit', e => {
    e.preventDefault();
    validateInputs();
});

const errorMessage = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('invalid');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const succeedMessage = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('invalid');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {

    // var nameValue = document.custom_form.username;
    // var emailValue = document.custom_form.email;
    // var countryValue = document.custom_form.country;
    // var messageValue = document.custom_form.message;
    // var checkValue = document.custom_form.checklist;

    if (judul.value == '') {
        errorMessage(judul, 'Isi judul portofoliomu!');
    
    } else {
        succeedMessage(judul);
    }
    
    if (deskripsi.value == '') {
        errorMessage(deskripsi, 'Tulis deksripsi pengalamanmu!');
    } else {
        succeedMessage(deskripsi);
    }
   
    if (durasi.value == '') {
        errorMessage(durasi, 'Isi dengan tanggal mulai dan akhir kontrak kerja!');
    } else {
        succeedMessage(durasi);
    }
    
    if (lokasi.value == '') {
        errorMessage(lokasi, 'Isi dengan lokasi pekerjaanmu!');
    } else {
        succeedMessage(lokasi);
    }

    if (catatan.value == '') {
        errorMessage(message, 'Deksripsikan lebih lanjut tentang bagian kerjamu!');
    } else {
        succeedMessage(message);
    }  
};