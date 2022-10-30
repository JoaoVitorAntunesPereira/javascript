let p1 = window.document.getElementsByTagName('p')[1]
window.document.write('Está escrito assim: '+ p1.innerText)

const chk = window.document.getElementById('chk')

chk.addEventListener('change',()=>{
    document.body.classList.toggle('dark')
})

window.document.head.classList.toggle()

/* let p1 = window.document.getElementsByTagName('p')[0]
window.document.write('Está escrito assim: '+ p1.innerText) */

