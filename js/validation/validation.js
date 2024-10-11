    function checkEmtyValue(theThongBao,value){
        if(value == ""){
            theThongBao.innerHTML = "Vui lòng không được bỏ trống";
            return false
        }else{
            theThongBao.innerHTML="";
            return true;
        }
    }
    function checkNameCustomer(theThongBao,value){
        let re = /^[a-zA-Z]+(\s+[a-zA-Z]+)+$/;
        if(!re.test(value)){
            theThongBao.innerHTML="Họ và tên không hợp lệ. Vui lòng nhập ít nhất 2 từ, chỉ bao gồm chữ cái và khoảng trắng."
            return false;
        }else{
            theThongBao.innerHTML="";
            return true;
        }
    }

    function checkEmailCustomer(theThongBao,value){
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!re.test(value)){
            theThongBao.innerHTML="Email không hợp lệ"
            return false;
        }else{
            theThongBao.innerHTML="";
            return true;
        }
    }
    function checkPasswordCustomer(theThongBao,value){
        let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(!re.test(value)){
            theThongBao.innerHTML="Mật khẩu phải bao gồm ít nhất 8 ký tự, có cả chữ cái và số!"
            return false;
        }else{
            theThongBao.innerHTML="";
            return true;
        }
    }
    function checkRePasswordCustomer(theThongBao,password,repassword){
        if(repassword != password){
            theThongBao.innerHTML="Mật khẩu nhập lại không khớp!"
            return false;
        }else{
            theThongBao.innerHTML="";
            return true;
        }
    }
    function checkPhoneCustomer(theThongBao,value){
        let re = /^(0[3|5|7|8|9][0-9]{8})$/;
        if(!re.test(value)){
            theThongBao.innerHTML="Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại hợp lệ của Việt Nam."
            return false;
        }else{
            theThongBao.innerHTML="";
            return true;
        }
    }