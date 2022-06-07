function Add() {
    const value = document.querySelector('[data-item]').value
    const ul = document.querySelector('[data-list]')
    const li = document.createElement('li')
    li.innerHTML = value
    ul.appendChild(li)
}

