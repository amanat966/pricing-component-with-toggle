const btnSelect = document.getElementById('switch-block')
btnSelect.addEventListener('click', selectToggle)

function selectToggle() {
    var monthly = document.getElementsByClassName('price-cards__monthly')
    var anually = document.getElementsByClassName('price-cards__anually')

    var i
    var n
    for (i = 0; i < monthly.length; i++) {
        for(n = 0; n < anually.length; n++){
            if( monthly[i].style.display === 'none') {
                monthly[i].style.display = 'block'
                anually[i].style.display = 'none'
                btnSelect.style.justifyContent ='flex-end'
            }
            else{
                monthly[i].style.display = 'none'
                anually[i].style.display = 'block'
                btnSelect.style.justifyContent = 'flex-start'
                
            }
        }
    }
}
