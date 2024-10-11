window.onload = function () {
    // Lấy giá trị của productid từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productid');
    function render(data) {
        let tenSanPham = data.content.name;
        let hinhSanPham = data.content.image;
        let giaSanPham = data.content.price;
        let mieuTaNganSanPham = data.content.shortDescription;
        let soLuongSanPha = data.content.quantity;
        console.log(tenSanPham)
        let productName = document.getElementById("productName");
        let productImg = document.getElementById("img_1");
        let productPirce = document.querySelector(".price_new");
        let productDesc = document.querySelector(".pro-desc");
        let productStock = document.querySelector(".quantityInStock");
        productImg.src = hinhSanPham;
        productName.innerHTML = tenSanPham;
        productPirce.innerHTML = giaSanPham;
        productDesc.innerHTML = mieuTaNganSanPham;
        productStock.innerHTML = `${soLuongSanPha} in stock`;
    }
    function renderListProduct(data) {
        let listProductCarousel = "";
        for (let i of data.content) {
            listProductCarousel +=
                `
            <div class="product_item">
                                    <div class="product_thumb">
                                        <img src="${i.image}" alt="" width="100%" />
                                        <div class="product_label">
                                            <span>NEW</span>
                                        </div>
                                        <div class="button_group">
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                                                data-bs-title="Add to Wishlist"><i class="fa-regular fa-heart"></i></a>
                                            <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                                                data-bs-title="Quick View"><i class="fa-regular fa-eye"></i></a>
                                        </div>
                                    </div>
                                    <div class="product_content">
                                        <div class="product_caption">
                                            <div class="product_name">
                                                <a href="#">${i.name}</a>
                                            </div>
                                            <div class="price_box">
                                                <span class="price_new">${i.price}</span>
                                            </div>
                                            <a href="./detail.html?productid=${i.id}">
                                                <div class="add_to_cart">
                                                    <i class="fa fa-shopping-cart"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="ratings">
                                            <span><i class="fa fa-star"></i></span>
                                            <span><i class="fa fa-star"></i></span>
                                            <span><i class="fa fa-star"></i></span>
                                            <span><i class="fa fa-star"></i></span>
                                            <span><i class="fa fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
            `

        }
        document.querySelector(".product-carousel").innerHTML = listProductCarousel;
        $(".product-carousel").owlCarousel({
            loop: true,
            dots: false,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 3,
                },
            },
        });
    }
    function getData() {
        let promise = axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`,
            method: "GET",
        })
        promise
            .then((res)=>{
                console.log(res);
                render(res.data);
            })
            .catch(function (err) {
                console.log(err)
            });
    }
    getData();
    function getListDataProDuct() {
        let promise = axios({
            url: "https://shop.cyberlearn.vn/api/Product",
            method: "GET",
        })
        promise
            .then((res) => {
                console.log(res.data);
                renderListProduct(res.data);
            })
            .catch(function (err) {
                console.log(err)
            });

    }

    getListDataProDuct();

}

