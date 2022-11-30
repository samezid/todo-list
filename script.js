const listTxt = document.querySelector('.list-child');
const input = document.querySelector('.input');
const submit = document.querySelector('.add-btn');
const listParent = document.querySelector('.list-parent');

let dataBase = [];

submit.addEventListener('click', () => {
  dataBase.push({
    id: Date.now(),
    text: input.value,
    finish: false,
  });
  input.value = '';
  render();
  console.log(dataBase)
});

function render() {
    removeElement()
  dataBase.forEach((data) => {
    const listChild = document.createElement('div');
    const buttonParent = document.createElement('div');
    const listTxt = document.createElement('p');
    const listDn = document.createElement('i');
    const listRm = document.createElement('i');

    listRm.onclick = () => deleteList(data.id)

    listChild.className = 'list-child';
    listTxt.className = 'list-txt';
    listTxt.innerHTML = data.text;
    listDn.className = 'fa fa-check list-dn';
    listRm.className = 'fa fa-trash list-rm';

    listChild.appendChild(listTxt);
    listChild.appendChild(buttonParent);
    buttonParent.appendChild(listDn);
    buttonParent.appendChild(listRm);
    listParent.appendChild(listChild);

    listDn.onclick = () => {
        if(data.finish === false){
            data.finish = true
            listChild.style.background = '#01010'
            listTxt.style.color = 'grey'
            listTxt.style.textDecoration  = 'line-through'
            listDn.style.border = '2px solid grey'
            listDn.style.color = 'grey'
            listRm.style.border = '2px solid grey'
            listRm.style.color = 'grey'
        } else {
            data.finish = false
            listChild.style.background = '#3a3a3a'
            listTxt.style.color = 'white'
            listTxt.style.textDecoration  = 'none'
            listDn.style.border = '2px solid #60C687'
            listDn.style.color = '#60C687'
            listRm.style.border = '2px solid #E91F63'
            listRm.style.color = '#E91F63'
        }
    }
  });
}

function removeElement() {
    while (listParent.hasChildNodes()) {
        listParent.removeChild(listParent.firstChild)
    }
}

function deleteList(id) {
    dataBase = dataBase.filter(data => data.id !== id)
    render();
}