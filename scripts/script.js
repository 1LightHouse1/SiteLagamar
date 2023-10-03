// =================== Icone fixo navbar ===================
let menuIcon = document.querySelector('#menu-icon')
let navBar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active')
}

// =================== Sections Ativas pelo Link ===================
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // =================== NavBar grudada ===================
    let header = document.querySelector('header')
    
    header.classList.toggle('sticky', window.scrollY > 100)
    
    // =================== Removendo icone fixo navbar ===================
    menuIcon.classList.remove('bx-x')
    navBar.classList.remove('active')
}