document.addEventListener('DOMContentLoaded', function () {
   const list = document.querySelector('#participant-list');
   const btns = document.querySelectorAll('#participant-list .btn-danger');
   const forms = document.forms;
    //Adauga participant
    const addForm = forms[0];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const nume = addForm.nume.value;
        const prenume = addForm.prenume.value;
        const button = document.createElement('button');
            button.textContent = "Delete";
            button.classList.add('btn');
            button.classList.add('btn-danger');
            //Sterge Participants
            button.addEventListener('click', event => {
                event.target.parentElement.remove(event.target);
            });
        const li = document.createElement('li');
            li.textContent = nume+" "+prenume+" ";
            li.classList.add('list-group-item');
            li.appendChild(button);
        list.appendChild(li);
    });
});