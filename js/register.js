let arrKhachHang = [];
document.querySelector("#formQLKH").onsubmit = function (event) {
    event.preventDefault();
    let khachHang = getValueForm();
    if (khachHang != null) {
        let promise = axios({
            url: "https://shop.cyberlearn.vn/api/Users/signup",
            method: "POST",
            data: khachHang,
        })
        promise
            .then((res) => {
                arrKhachHang.push(khachHang);
                console.log(res);
                Toastify({
                    text: "Đăng ký thàng công",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();

                event.target.reset();
            })
            .catch((err) => {
                console.log(`Có lỗi xảy ra ${err}`)
            })

    }

}
function getValueForm() {
    let arrField = document.querySelectorAll(" form .input_content input");
    let khachHang = new KhachHang();
    let flag = true;
    let password;
    for (let i of arrField) {
        let { value, id } = i;
        khachHang[id] = value;
        let theThongBao = i.parentElement.querySelector("span");
        if (!checkEmtyValue(theThongBao, value)) {
            flag = false;
        } else {
            if (id == "name" && !checkNameCustomer(theThongBao, value)) {
                flag = false;
            } else if (id == "email" && !checkEmailCustomer(theThongBao, value)) {
                flag = false;
            } else if (id == "password") {
                password = value;
                if (!checkPasswordCustomer(theThongBao, value)) {
                    flag = false;
                }
            } else if (id == "txtrepassword" && !checkRePasswordCustomer(theThongBao, password, value)) {
                flag = false;
            } else if (id == "phone" && !checkPhoneCustomer(theThongBao, value)) {
                flag = false;
            }
            

        }
    }
    let genderRadios = document.querySelectorAll('form input[name="gender"]');
            for (let radio of genderRadios) {
                if (radio.checked) {
                    khachHang["gender"] = radio.value;
                    break;
                }
            }
    return flag ? khachHang : null
}