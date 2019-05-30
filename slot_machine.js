let count = 0;
const btnShuffle = document.querySelector('#casinoShuffle');
const btnStop = document.querySelector('#casinoStop');
const casino1 = document.querySelector('#casino1');
const casino2 = document.querySelector('#casino2');
const casino3 = document.querySelector('#casino3');
const faces = ["Ema", "Nico", "Ivan", "Carlitos", "Martin Junior", "Ale", "Gabi", "Lauti"];
const faces_div = document.querySelector('#faces');
const btnRemove = document.querySelector('#remove_face');
const btnAdd = document.querySelector('#add_face');
let combinaciones = document.querySelector('#combinaciones');
let ema_3 = document.querySelector('#ema_3');

const mCasino1 = create_new_machine(casino1, 0);
const mCasino2 = create_new_machine(casino2, 1);
const mCasino3 = create_new_machine(casino3, 2);

init_faces();

btnShuffle.addEventListener('click', () => {
    document.querySelector('#r1').innerText = "";
    count = 3;
    mCasino1.shuffle(9999);
    mCasino2.shuffle(9999);
    mCasino3.shuffle(9999);
});

btnStop.addEventListener('click', () => {
    switch(count) {
        case 3:
        mCasino1.stop(addResult);
        break;
        case 2:
        mCasino2.stop(addResult);
        break;
        case 1:
        mCasino3.stop(addResult);
        break;
    }
    count--;
});

btnRemove.addEventListener('click', () => {
    if (faces_div.children.length > 1) {
        faces_div.removeChild(faces_div.children[faces_div.children.length - 1]);
        write_combinations();
        write_ema3_probability();
    } else {
        alert("Ya posees el mínimo de caras!");
    }
});

btnAdd.addEventListener('click', () => {
    if (faces_div.children.length < faces.length) {
        add_face();
        write_combinations();
        write_ema3_probability();
    } else {
        alert("Ya posees el maximo de caras!");
    }
});
