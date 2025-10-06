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
const htmlTag = document.body

const btnCloseModalX = document.getElementById('btn_close_modal')
const megaMediaBtn = document.querySelectorAll('.btn_burger')

const megaBtn = document.querySelectorAll('.button.btn_burger')


const slider = document.querySelector('.slider-inner');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;

let slideIndex = 0;
let remIndex = 10
let burgerIsOpen = false


prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}


function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}


function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slider.style.transform = `translateX(${((index * remIndex) * 2)}rem)`;
        } else {
            slider.style.transform = `translateX(${(index * remIndex)}rem)`;
        }
    });
}


updateSlider();

function test() {
    burgerBtn.addEventListener('click', () => {
        burgerIsOpen = !burgerIsOpen
        burgerIsOpen ? burgerBtn.classList.toggle('active') : burgerBtn.classList.toggle('active')
        burgerIsOpen ? burger.classList.toggle('open') : burger.classList.toggle('open')
    }
    )
}

function clickBtnMedia() {
    megaMediaBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            burger.classList.toggle('open'),
                burgerBtn.classList.toggle('active'),
                console.log('about')
            burgerIsOpen = !burgerIsOpen
        })
    })
}

function giveMeBtn() {
    megaBtnBuy.forEach(btn => {
        btn.addEventListener('click', () => {
            modalClass.classList.toggle('show')

        })

    })
}

btnCloseModal.addEventListener('click', () => {
    modalClass.classList.toggle('show')
    htmlTag.style.setProperty('overflow-y', 'auto')
})

btnCloseModalX.addEventListener('click', () => {
    modalClass.classList.toggle('show')
    htmlTag.style.setProperty('overflow-y', 'auto')
})


giveMeBtn()
test()
clickBtnMedia()