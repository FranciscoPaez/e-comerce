let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [
    {
        name: 'AORUS 17G (RTX 30 Series)',
        image1: './images/28104.png',
        image2: './images/28102.png',
        old_price: '$399999',
        curr_price: '$369400'
    },
    {
        name: 'AORUS FI32U Gaming Monitor',
        image1: './images/28809.png',
        image2: './images/28815.png',
        old_price: '$248800',
        curr_price: '$241000'
    },
    {
        name: 'GeForce RTX™ 2060 OC 6G',
        image1: './images/24738.png',
        image2: './images/22847.png',
        old_price: '$132400',
        curr_price: '$127300'
    },
    {
        name: 'AMD Ryzen 9 5950x',
        image1: './images/5950x.jpeg',
        image2: './images/D_NQ_NP_682117-MLA44083243909_112020-O.jpg',
        old_price: '$114400',
        curr_price: '$111300'
    },
    {
        name: 'Intel Intel Core i9 11-900K',
        image1: './images/i9.jpg',
        image2: './images/Intel-Core-i9-11900K.jpeg',
        old_price: '$78400',
        curr_price: '$75300'
    },
    {
        name: 'Teclado Mecánico LOGITECH G PRO.',
        image1: './images/920-009388.png',
        image2: './images/920-009388_1.png',
        old_price: '$13499',
        curr_price: '$11300'
    },
    {
        name: 'Mouse Inalámbrico Logitech G PRO X SUPERLIGHT ',
        image1: './images/910-005879.png',
        image2: './images/910-005879_5.png',
        old_price: '$14894',
        curr_price: '$12300'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">Comprar</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})