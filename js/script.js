'use strict'

const list = document.querySelectorAll('.header-item')

list.forEach(item => {
    const width = getComputedStyle(item).width.slice(0,5)
    item.style.width = `${+width + 10}px`
})  