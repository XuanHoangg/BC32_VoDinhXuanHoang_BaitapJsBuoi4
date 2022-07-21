/**
 * Bài 1: Mô hình 3 khối
 *      Input: User nhập vào ngày tháng năm
 *      Process: Bước 1: Tạo 3 variable day,month,year DOM và lấy value người nhập
 *               Bước 2: Sử dụng câu lệnh điều kiện if-else kiểm tra
 *                 Ngày trước đó: 
 *                     day == 1 và month == 1: ===> gán day = 31, month =12, year--
 *                     month == 3 && day == 1: ===>gán day = 28; month = 2;
 *                     (month == 4 || month == 6 || month == 9 || month == 11 || month == 2) && day == 1: ===> gán day = 31; month--;
 *                     (month == 5 || month == 7 || month == 10 || month == 12) && day == 1: ===> gán day = 30;  month--;
 *                     Trường hợp còn lại day--
 *                 Ngày sau đó:
 *                     day == 31 && month == 12: ===> gán  day = 31;month = 12;year--;
 *                     month == 3 && day == 1: ===> gán  day = 28;
                                                         month = 2;

 *                     (month == 4 || month == 6 || month == 9 || month == 11 || month == 2) && day == 1: ===> gán day = 31;
                                                                                                                    month--;
 *                     (month == 5 || month == 7 || month == 10 || month == 12) && day == 1: ===> gán day = 30;
                                                                                                      month--;
 *                     Trường hợp còn lại gán day++;
 *      Output: Xuất ra màn hình kết quả ngày tháng năm trước và sau ngày ngày user nhập
 */


document.getElementById('before').onclick = function () {
    var day = +document.getElementById('day').value;
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    if (day == 1 && month == 1) {
        day = 31;
        month = 12;
        year--;
    }
    else if (month == 3 && day == 1) {
        day = 28;
        month = 2;
    }
    else if ((month == 4 || month == 6 || month == 9 || month == 11 || month == 2) && day == 1) {
        day = 31;
        month--;
    }
    else if ((month == 5 || month == 7 || month == 10 || month == 12) && day == 1) {
        day = 30;
        month--;
    }
    else {
        day--;
    }
    document.getElementById('result').innerHTML = "<p>" + day + '/' + month + '/' + year + "</p>";
}

document.getElementById('after').onclick = function () {
    var day = +document.getElementById('day').value;
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    if (day == 31 && month == 12) {
        day = 1;
        month = 1;
        year++;
    }
    else if (month == 2 && day == 28) {
        day = 1;
        month = 3;
    }
    else if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 30) {
        day = 1;
        month++;
    }
    else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) && day == 31) {
        day = 1;
        month++;
    }
    else {
        day++;
    }
    document.getElementById('result').innerHTML = "<p>" + day + '/' + month + '/' + year + "</p>";
}


/**
 * Bài 2: Mô hình 3 khối
 *      Input: User nhập vào tháng và năm
 *      Process: Bước 1: DOM và lấy giá trị tháng, năm
 *               Bước 2: Sử dụng câu lệnh switch case
 *                       case 1,3,5,6,7,10,12 ===> in ra 31 ngày
 *                       case 4,6,9,11 ===> in ra 30 ngày
 *                       case 2: kiếm tra xem năm có nhuận hay không
 *                              dùng if-else để kiểm tra năm nhuận là năm chia hết cho 4 và các năm tận cùng là 00 thì chia hết cho 100 và 400
 *      Output: In ra màn hình kết quả số ngày trong tháng của năm đó
 */

document.getElementById('Ex2').onclick = function () {
    var month = +document.getElementById('monthEx2').value;
    var year = +document.getElementById('yearEx2').value;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            document.getElementById('show').innerHTML = "Tháng " + month + " năm " + year + " có 31 ngày";
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11: {
            document.getElementById('show').innerHTML = "Tháng " + month + " năm " + year + " có 30 ngày";
            break;
        }
        case 2: {
            if (year % 100 == 0 && year % 400 == 0) {
                document.getElementById('show').innerHTML = "Tháng " + month + " năm " + year + " có 29 ngày";
            } else if (year % 100 == 0 && year % 400 != 0) {
                document.getElementById('show').innerHTML = "Tháng " + month + " năm " + year + " có 28 ngày";
            } else if (year % 4 == 0) {
                document.getElementById('show').innerHTML = "Tháng " + month + " năm " + year + " có 29 ngày";
            } else {
                document.getElementById('show').innerHTML = "Tháng " + month + " năm " + year + " có 28 ngày";
            }
        }
    }
}

/**
 * Bài 3: Mô hình 3 khối
 *      Input: User nhập vào số
 *      Process: Bước 1: DOM tới value người dùng nhập
 *               Bước 2: Tạo 3 variable hangTram, hangChuc,hangDV và xử lý để tách số user nhập thành 3 chữ số
 *               Bước 3: Viết hàm return về giá trị chữ ví dụ (1 return "một"). Dùng câu lệnh điều kiện switch-case
 *               Bước 4: Sử dụng câu lệnh điều kiện if-else tất cả các trường hợp user nhập vào bao gồm cả 00x hoặc 0xx (x là số bất kì khác 0)
 *                       và in ra màn hình kết quả phù hợp với user nhập
 *      Output: In ra màn hình kết quả đọc số        
 *               
 */

document.getElementById('print').onclick = function () {
    var number = +document.getElementById('number').value;
    var hangTram = Math.floor(number / 100);
    var hangChuc = Math.floor(number / 10) % 10;
    var hangDV = number % 10;
    if (hangTram == 0 && hangChuc == 1) {
        document.getElementById('hienThi').innerHTML = "mười " + conver(hangDV);
    } else if (hangTram == 0 && hangChuc != 0) {
        document.getElementById('hienThi').innerHTML = conver(hangChuc) + " mươi " + conver(hangDV);
    } else if (hangTram == 0 && hangChuc == 0) {
        document.getElementById('hienThi').innerHTML = conver(hangDV);
    } else if (hangTram != 0 && hangChuc == 1) {
        document.getElementById('hienThi').innerHTML = conver(hangTram) + " trăm mười " + conver(hangDV);
    } else if (hangTram != 0 && hangChuc != 0) {
        document.getElementById('hienThi').innerHTML = conver(hangTram) + " trăm " + conver(hangChuc) + " mươi " + conver(hangDV);
    } else if (hangTram != 0 && hangChuc == 0 && hangDV == 0) {
        document.getElementById('hienThi').innerHTML = conver(hangTram) + " trăm ";
    } else {
        document.getElementById('hienThi').innerHTML = conver(hangTram) + " trăm " + conver(hangChuc) + " lẻ " + conver(hangDV);
    }

}

function conver(number) {
    switch (number) {
        case 0:
            return "";
            break;
        case 1:
            return "một";
            break;
        case 2:
            return "hai";
            break;
        case 3:
            return "ba";
            break;
        case 4:
            return "bốn";
            break;
        case 5:
            return "năm";
            break;
        case 6:
            return "sáu";
            break;
        case 7:
            return "bảy";
            break;
        case 8:
            return "tám";
            break;
        case 9:
            return "chín";
            break;
    }
}

/**
 * Bài 4: Mô hình 3 khối
 *      Input: User nhập tất cả các thông tin
 *      Process: Bước 1: DOM và lấy value thông tin 3 sv và tọa độ trường       
 *               Bước 2: tạo 3 variable distance1,distance2,distance3 lần lượt áp dụng công thức tính khoảng cách lần lượt cho từng sv so với trường
 *               Bước 3: dùng câu lệnh điều kiện if-else so sánh giá trị distance lớn nhất và in ra tên sv đó
 *      Output: In ra màn hình sinh viên xa trường nhất
 */

document.getElementById('find').onclick = function () {
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var x1 = +document.getElementById('x1').value;
    var x2 = +document.getElementById('x2').value;
    var x3 = +document.getElementById('x3').value;
    var x4 = +document.getElementById('x4').value;
    var y1 = +document.getElementById('y1').value;
    var y2 = +document.getElementById('y2').value;
    var y3 = +document.getElementById('y3').value;
    var y4 = +document.getElementById('y4').value;
    var distance1 = Math.sqrt((Math.pow(x1 - x4, 2) + Math.pow(y1 - y4, 2)));
    var distance2 = Math.sqrt((Math.pow(x2 - x4, 2) + Math.pow(y2 - y4, 2)));
    var distance3 = Math.sqrt((Math.pow(x3 - x4, 2) + Math.pow(y3 - y4, 2)));
    if (distance1 > distance2 && distance1 > distance3) {
        document.getElementById('ketQua').innerHTML = "Sinh viên xa trường nhất là: " + name1;
    } else if (distance2 > distance1 && distance2 > distance3) {
        document.getElementById('ketQua').innerHTML = "Sinh viên xa trường nhất là: " + name2;
    } else {
        document.getElementById('ketQua').innerHTML = "Sinh viên xa trường nhất là: " + name3;
    }
}














































































































































