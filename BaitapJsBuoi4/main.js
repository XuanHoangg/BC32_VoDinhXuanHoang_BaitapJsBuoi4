/**
 * Bài 1: Mô hình 3 khối:
 *  - Input : Người dùng nhập 3 số nguyên
 *  - Process : Bước 1: DOM và lấy value của 3 số
 *              Bước 2: Tạo biến show = ""
 *              Bước 3: viết câu điêu kiện if-else 6 trường hợp
 *                      + Th1: Nếu st1 > st2 > st3 : in ra lần lượt st3,st2,st1
 *                      + Th2: Nếu st1 > st3 > st2 : in ra lần lượt st2,st3,st1
 *                      + .... 4 trường hợp còn lại tương tự
 *  - Output : In ra màn hình dãy số tăng dần
 */

document.getElementById('eX1').onclick = function () {
    var firstNumber = +document.getElementById('firstNum').value;
    var secondNumber = +document.getElementById('secondNum').value;
    var thirdNumber = +document.getElementById('thirdNum').value;
    var show = "";
    if (firstNumber >= secondNumber && secondNumber >= thirdNumber) {
        show += "<p> Sắp xếp tăng dần lần lượt là: " + thirdNumber + ', ' + secondNumber + ', ' + firstNumber + "</p>";
        document.getElementById('show').innerHTML = show;
    }
    else if (firstNumber >= secondNumber && firstNumber >= thirdNumber && secondNumber <= thirdNumber) {
        show += "<p> Sắp xếp tăng dần lần lượt là: " + secondNumber + ', ' + thirdNumber + ', ' + firstNumber + "</p>";
        document.getElementById('show').innerHTML = show;
    }
    else if (secondNumber >= firstNumber && firstNumber >= thirdNumber) {
        show += "<p> Sắp xếp tăng dần lần lượt là: " + thirdNumber + ', ' + firstNumber + ', ' + secondNumber + "</p>";
        document.getElementById('show').innerHTML = show;
    }
    else if (secondNumber >= firstNumber && secondNumber >= thirdNumber && firstNumber <= thirdNumber) {
        show += "<p> Sắp xếp tăng dần lần lượt là: " + firstNumber + ', ' + thirdNumber + ', ' + secondNumber + "</p>";
        document.getElementById('show').innerHTML = show;
    }
    else if (thirdNumber >= firstNumber && firstNumber >= secondNumber) {
        show += "<p> Sắp xếp tăng dần lần lượt là: " + secondNumber + ', ' + firstNumber + ', ' + thirdNumber + "</p>";
        document.getElementById('show').innerHTML = show;
    }
    else if (thirdNumber >= firstNumber && thirdNumber >= secondNumber && firstNumber <= secondNumber) {
        show += "<p> Sắp xếp tăng dần lần lượt là: " + firstNumber + ', ' + secondNumber + ', ' + thirdNumber + "</p>";
        document.getElementById('show').innerHTML = show;
    }
}

/**
 * Bài 2: Mô hình 3 khối
 *      - Input : Nhân vật mà người dùng chọn
 *      - Process : Bước 1: DOM và lấy value người dùng nhập
 *                  
 *                  Bước 2: Sử dụng câu lệnh điều kiện if-else 
 *                  Người dùng chọn 1 nhân vật lúc này ta thu được value
 *                  ví dụ người dụng chọn Bố ta thu được value là B.Sau đó
 *                  dùng câu điều kiện if-else nếu value B = "B" thì in ra câu
 *                  chào tương ứng
 *      - Output : In ra màn hình câu chào tương ứng với nhân vật người dùng chọn
 *                   
 */
document.getElementById('eX2').onclick = function () {
    var choose = document.getElementById('choose').value;
    if (choose === "B") {
        document.getElementById('showResult').innerHTML = "Chào Bố";
    }
    else if (choose === "M") {
        document.getElementById('showResult').innerHTML = "Chào Mẹ";
    }
    else if (choose === "A") {
        document.getElementById('showResult').innerHTML = "Chào Anh trai";
    }
    else {
        document.getElementById('showResult').innerHTML = "Chào Em gái";
    }
}


/**
 * Bài 3: Mô hình 3 khối:
 *    - Input : Người dùng nhập vào 3 số nguyên
 *    - Process : Bước 1: DOM và lấy value 3 số
 *                Bước 2: Tạo 1 biến chan và 1 biến le
 *                Bước 3: Kiểm tra chẵn lẻ các số bằng cách chia lấy dư cho 2
 *                Dùng câu lệnh điều kiện if-else nếu chẵn thì chan++ và nếu lẽ thì le++
 *    - Output : Xuất ra màn hình kết quả của chan và le;
 */

document.getElementById('eX3').onclick = function () {
    var firstNumber = +document.getElementById('firstNumber').value;
    var secondNumber = +document.getElementById('secondNumber').value;
    var thirdNumber = +document.getElementById('thirdNumber').value;
    var chan = 0;
    var le = 0;
    if (firstNumber % 2 === 0) {
        chan++;
    }
    else {
        le++;
    }
    if (secondNumber % 2 === 0) {
        chan++;
    }
    else {
        le++;
    }
    if (thirdNumber % 2 === 0) {
        chan++;
    }
    else {
        le++;
    }
    document.getElementById('result').innerHTML = "<p> Có " + chan + ' số chẵn và ' + le + ' số lẻ' + " </p>";
}

/**
 * Bài 4: Mô hình 3 khối
 *      - Input : Người dùng nhập vào 3 cạnh tam giác
 *      - Process : Bước 1: DOM và lấy value 3 cạnh
 *                  Bước 2: Dùng câu lệnh điều kiện if-else để kiểm tra 3 cạnh tam giác
 *                          Bằng cách áp dụng công thức cho từng loại tam giác
 *      - Output  : Xuất ra đó là tam giác gì nếu 3 cạnh không thỏa thì in ra
 *                  vui lòng nhập lại
 */

document.getElementById('eX4').onclick = function () {
    var AB = +document.getElementById('number1').value;
    var BC = +document.getElementById('number2').value;
    var AC = +document.getElementById('number3').value;
    if (AB + BC < AC || AB + AC < BC || BC + AC < AB) {
        document.getElementById('hienThi').innerHTML = "3 cạnh không chính xác vui lòng nhập lại"
    }
    else if (AB === AC && AB === BC) {
        document.getElementById('hienThi').innerHTML = "Đây là tam giác đều";
    }
    else if ((AB === AC && AB != BC) || (AB === BC && AB != AC)
        || (BC === AC && BC != AB)) {
        document.getElementById('hienThi').innerHTML = "Đây là tam giác cân";
    }
    else if ((AB * AB + AC * AC === BC * BC) || (AB * AB + BC * BC === AC * AC)
        || (AC * AC + BC * BC === AB * AB)) {
        document.getElementById('hienThi').innerHTML = "Đây là tam giác vuông";
    }
    else {
        document.getElementById('hienThi').innerHTML = "Đây là tam giác khác";
    }
}