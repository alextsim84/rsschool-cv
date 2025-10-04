const burgerBtn = document.getElementById('burger_new')
const burger = document.getElementById('burger')
const btnAboutMedia = document.getElementById('btn_about_media')
const btnPortfolioMedia = document.getElementById('btn_portfolio')
const btnPriceMedia = document.getElementById('btn_price')
const btnFqMedia = document.getElementById('btn_faq')
const btnContacts = document.getElementById('btn_contacts_media')
const btnBuy = document.getElementById('btn_by')
const modalClass = document.getElementById('modal_wrapper')
const btnCloseModal = document.getElementById('btn_buy_modal_close')
const megaBtnBuy = document.querySelectorAll('.btn_by')


const megaBtn = document.querySelectorAll('.button.btn_burger')

let burgerIsOpen = false

function test() {
    burgerBtn.addEventListener('click', () => {
        burgerIsOpen = !burgerIsOpen
        burgerIsOpen ? burgerBtn.classList.toggle('active') : burgerBtn.classList.toggle('active')
        burgerIsOpen ? burger.classList.toggle('open') : burger.classList.toggle('open')
    }
    )
}



function clickBtnMedia() {
    btnAboutMedia.addEventListener('click', () => {
        burger.classList.toggle('open'),
            burgerBtn.classList.toggle('active'),
            console.log('about')
        burgerIsOpen = !burgerIsOpen
    }
    )
}


function giveMeBtn() {
    megaBtnBuy.forEach(btn => {
        console.log(btn);
        btn.addEventListener('click', () => {
            modalClass.classList.toggle('show')
        })

    })
}

btnCloseModal.addEventListener('click', () => {
    modalClass.classList.toggle('show')
})


giveMeBtn()
test()
clickBtnMedia()


