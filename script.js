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
  });
}

function removeElement() {
    while (listParent.hasChildNodes()) {
        listParent.removeChild(listParent.firstChild)
    }
}
