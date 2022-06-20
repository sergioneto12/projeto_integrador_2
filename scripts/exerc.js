let list = []

function Answers() {
    if (document.querySelector('input[name="first"]:checked').value !== null)
        var qone = document.querySelector('input[name="first"]:checked').value
        list.push(qone)

    if (document.querySelector('#input-stars').value !== null)
        var qtwo = document.querySelector('#input-stars').value
        list.push(qtwo)

    if (document.querySelector('.its-definition').value !== null)
        var qthree = document.querySelector('.its-definition').value
        list.push(qthree)

    console.log(list)
}