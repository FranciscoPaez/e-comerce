document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all'
})

let products = [
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
    {
        name: 'Logitech LIGHTSYNC G935',
        image1: './images/981-000742_4.png',
        image2: './images/981-000742_1.png',
        old_price: '$28499',
        curr_price: '$25649'
    },
    {
        name: 'Mouse Logitech G703 LIGHTSPEED WIRELESS',
        image1: './images/910-005639-1.png',
        image2: './images/910-005639-2.png',
        old_price: '$7400',
        curr_price: '$6300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/915TKL_3--1-.png',
        image2: './images/915TKL_2--1-.png',
        old_price: '$32400',
        curr_price: '$29010'
    },
    {
        name: 'Mousepad Logitech G640',
        image1: './images/943-000077_2.png',
        image2: './images/943-000077_1.png',
        old_price: '$3800',
        curr_price: '$3530'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Comprar ahora</a>
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
    })
}

renderProducts(products)