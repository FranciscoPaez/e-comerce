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
]

let product_list = document.querySelector('#products')

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
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">comprar</a>
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
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))