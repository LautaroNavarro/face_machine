function _rand_int_between_actual_faces(){
    return Math.floor(Math.random() * faces_div.children.length);
}

function create_new_machine(element, active){
    let newMachine = new SlotMachine(element, {
        active: active,
        delay: 500,
        randomize: _rand_int_between_actual_faces
    });
    return newMachine;
}

function addResult(active){
    result = document.createElement('span');
    result.classList = ["badge badge-light"];
    result.innerText = faces[this.active];
    document.querySelector('#r1').appendChild(result);
}

function add_face(){
    new_face = document.createElement('div');
    new_face.classList = ["list-group-item"];
    new_face.innerText = faces[faces_div.children.length];
    faces_div.appendChild(new_face)
}

function init_faces(){
    for (var i = 0; i < faces.length; i++) {
        add_face();
    }
    write_combinations();
    write_ema3_probability();
}

function write_combinations(){
    combinaciones.innerText = "";
    new_combination = document.createElement('div');
    new_combination.classList = ["list-group-item"];
    new_combination.innerText = Math.pow(faces_div.children.length, 3);
    combinaciones.appendChild(new_combination);
}

function write_ema3_probability(){
    ema_3.innerText = "";
    new_probability = document.createElement('div');
    new_probability.classList = ["list-group-item"];
    new_probability.innerText = 1/Math.pow(faces_div.children.length, 3);
    ema_3.appendChild(new_probability);
}