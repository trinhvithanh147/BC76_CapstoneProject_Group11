window.onload = function () {
    // Lấy giá trị của productid từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productid');
    function renderListProduct(data) {
        let listProduct = "";
        let listProductMen = "";
        let listProductWoman = "";
        let listProductCarousel ="";
        for (let i of data.content) {
            listProduct +=
                `
                <div class="product_item">
                                        <div class="product_thumb">
                                            <img src="${i.image}" alt="" width="100%" />
                                            <div class="product_label">
                                                <span>NEW</span>
                                            </div>
                                            <div class="button_group">
                                                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top"
                                                    data-bs-title="Add to Wishlist"><i
                                                        class="fa-regular fa-heart"></i></a>
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
                                                <a href="./detail/detail.html?productid=${i.id}">
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
        for (let i = 0; i <= 9; i++) {
            if (i == 5 || i == 4 || i == 3 || i == 6 || i == 1 || i == 9||i == 2 || i== 7) {
                listProductMen +=
                    `
            <div class="product_item">
                                    <div class="product_thumb">
                                        <img src="${data.content[i].image}" alt="" width="100%" />
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
                                                <a href="#">${data.content[i].name}</a>
                                            </div>
                                            <div class="price_box">
                                                <span class="price_new">${data.content[i].price}</span>
                                            </div>
                                            <a href="./detail/detail.html?productid=${data.content[i].id}">
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

        }
        for (let i = 10; i <= 18; i++) {
            if (i == 11 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16||i==17||i==10) {
                listProductWoman +=
                    `
            <div class="product_item">
                                    <div class="product_thumb">
                                        <img src="${data.content[i].image}" alt="" width="100%" />
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
                                                <a href="#">${data.content[i].name}</a>
                                            </div>
                                            <div class="price_box">
                                                <span class="price_new">${data.content[i].price}</span>
                                            </div>
                                            <a href="./detail/detail.html?productid=${data.content[i].id}">
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

        }
        for (let i = 10; i <= 18; i++) {
            if (i == 11 || i == 12 || i == 13 || i == 14 || i == 15 || i == 16) {
                listProductCarousel +=
                    `
            <div class="product_item">
                                    <div class="product_thumb">
                                        <img src="${data.content[i].image}" alt="" width="100%" />
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
                                                <a href="#">${data.content[i].name}</a>
                                            </div>
                                            <div class="price_box">
                                                <span class="price_new">${data.content[i].price}</span>
                                            </div>
                                            <a href="./detail/detail.html?productid=${data.content[i].id}">
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

        }
        document.querySelector("#list_product").innerHTML = listProduct;
        document.querySelector("#productMen").innerHTML = listProductMen;
        document.querySelector("#productWoman").innerHTML = listProductWoman;
        document.querySelector(".product-carousel").innerHTML=listProductCarousel;
        $(".product-carousel").owlCarousel({
            loop: true,
            dots: true,
            margin: 10,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    }
    // async function callApi(){
    //     let promise = await axios({
    //         url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`,
    //         method: "GET",
    //     })
    //     let data = promise.data;
    //     return data;

    // }
    // Kiểm tra nếu productid tồn tại
    // function getData() {
    //     // Gọi API và xử lý kết quả với then/catch
    //     axios.get(`https://shop.cyberlearn.vn/api/Product`)
    //         .then(function (response) {
    //             // Gán dữ liệu vào biến
    //             const data = response.data;
    //             render(data);
    //             // Hiển thị dữ liệu
    //             // console.log(data);
    //         })
    //         .catch(function (error) {
    //             // console.error('Error:', error);
    //         });
    // }

    // getData(productId);
    function getListDataProDuct() {
        let promise = axios({
            url: "https://shop.cyberlearn.vn/api/Product",
            method: "GET",
        })
        promise
            .then((res) => {
                let data = res.data;
                renderListProduct(data);
            })
    }
    getListDataProDuct();

}

