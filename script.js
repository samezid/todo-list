let listParent = document.getElementById('list-parent')


// if add-task onclick= tambah li
function addTask() {
    // ambil addtask
    let input = document.getElementById('input')
    let newList = "<li class='list-child' id='list-child'><span class='list-txt'>" + input.value + "</span><span><button class='list-dn'><i class='fa fa-check' aria-hidden='true'></i></button><button class='list-rm' onclick='rm()'><i class='fa fa-trash' aria-hidden='true'></i></button></span></li>"

    listParent.insertAdjacentHTML('afterbegin', newList)

    input.value = ""
}
