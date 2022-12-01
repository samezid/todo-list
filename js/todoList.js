const listTxt = document.querySelector('.list-child');
const input = document.querySelector('.input');
const submit = document.querySelector('.add-btn');
const listParent = document.querySelector('.list-parent');
const KEY = 'TODOLIST'
let dataBase = [];

submit.addEventListener('click', () => {
  dataBase.push({
    id: Date.now(),
    text: input.value,
    finish: false,
  });
  input.value = '';
  saveData();
  render();
});

function render() {
  removeElement();
  dataBase.forEach((data) => {
    const listChild = document.createElement('div');
    const buttonParent = document.createElement('div');
    const txtParent = document.createElement('div');
    const listTxt = document.createElement('p');
    const listDn = document.createElement('i');
    const listRm = document.createElement('i');

    listRm.onclick = () => deleteList(data.id);

    listChild.className = 'list-child';
    listTxt.className = 'list-txt';
    txtParent.className = 'txt-parent';
    listTxt.innerHTML = data.text;
    listDn.className = 'fa fa-check list-dn';
    listRm.className = 'fa fa-trash list-rm';

    if (data.finish) {
      data.finish = true;
      listChild.style.background = '#282828';
      listChild.style.transition = 'all 0.5s ease';
      listChild.style.width = '550px';
      listTxt.style.color = 'grey';
      listTxt.style.textDecoration = 'line-through';
      listDn.style.border = '2px solid grey';
      listDn.style.color = 'grey';
      listRm.style.border = '2px solid grey';
      listRm.style.color = 'grey';
    }

    listParent.appendChild(listChild);
    listChild.appendChild(txtParent);
    listChild.appendChild(buttonParent);
    txtParent.appendChild(listTxt);
    buttonParent.appendChild(listDn);
    buttonParent.appendChild(listRm);

    listDn.onclick = () => {
      if (data.finish === false) {
        data.finish = true;
        listChild.style.background = '#282828';
        listChild.style.transition = 'all 0.5s ease';
        listChild.style.width = '550px';
        listTxt.style.color = 'grey';
        listTxt.style.textDecoration = 'line-through';
        listDn.style.border = '2px solid grey';
        listDn.style.color = 'grey';
        listRm.style.border = '2px solid grey';
        listRm.style.color = 'grey';
      } else {
        data.finish = false;
        listChild.style.background = '#3a3a3a';
        listChild.style.width = '600px';
        listTxt.style.color = 'white';
        listTxt.style.textDecoration = 'none';
        listDn.style.border = '2px solid #60C687';
        listDn.style.color = '#60C687';
        listRm.style.border = '2px solid #E91F63';
        listRm.style.color = '#E91F63';
      }
    };
    console.log(dataBase);
  });
}

function removeElement() {
  while (listParent.hasChildNodes()) {
    listParent.removeChild(listParent.firstChild);
  }
}

function deleteList(id) {
  dataBase = dataBase.filter((data) => data.id !== id);
  render();
}

function saveData() {
    localStorage.setItem(KEY, JSON.stringify(dataBase))
    getData()
    render()
}

function getData() {
    dataBase = JSON.parse(localStorage.getItem(KEY))
}

getData()
render()