function dom(selector) {
    return document.querySelector(selector);
}

function domID(selector) {
    return document.getElementById(selector).value;
}

function resetInput() {
    dom("#number").value = "";
}

// Thêm giá trị vào mảng
let arr = [];
function themSo() {
    let number = dom("#number").value * 1;
    arr.push(number);
    dom("#array").innerHTML = arr;
    dom("#array").style.display = "block";
    resetInput();
}
// ========================

// Bài 1: tổng cách số dương trong mảng
function tinhTong() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
    dom("#tongSoDuong").innerHTML = "Tổng số dương trong mảng: " + sum;
}
// ==========================

// Bài 2: Đếm số dương trong mảng
function demSo() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    console.log(count);
    dom("#demSoDuong").innerHTML = "Có " + count + " số dương trong mảng";
}
// ========================

// Bài 3: Tìm số nhỏ nhất trong mảng
function soNhoNhat() {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        console.log(min);
        dom("#soNhoNhat").innerHTML = "Số nhỏ nhất trong mảng: " + min;
    }
}
// ========================

// Bài 4: Tìm số dương nhỏ nhất trong mảng
function soDuongNhoNhat() {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            min = arr[i];
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        console.log(min);
        dom("#soDuongNhoNhat").innerHTML = "Số dương nhỏ nhất trong mảng: " + min;
    }
}
// ========================

// Bài 5: Tìm số chẵn cuối cùng trong mảng
function soChanCuoi() {
    let evenNum = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum = arr[i];
        } else {
            dom("#soChanCuoi").innerHTML = "Số chẵn cuối cùng: -1";
        }
    }
    console.log(evenNum);
    dom("#soChanCuoi").innerHTML = "Số chẵn cuối cùng: " + evenNum;
}
// ========================

// Bài 6: Đổi chỗ hai giá trị trong mảng theo vị trí
function doiCho() {
    let num1 = domID("num1") * 1,
        num2 = domID("num2") * 1;
    for (let i = 0; i < arr.length; i++) {
        const tmp = arr[num1]
        arr[num1] = arr[num2]
        arr[num2] = tmp
    }
    dom("#doiCho").innerHTML = "Mảng sau khi thay đổi vị trí: " + arr;
}
// ========================

// Bài 7: Sắp xếp mảng theo thứ tự tăng dần
function sort() {
    arr.sort((a, b) => a - b);
    dom("#sort").innerHTML = "Thứ tự tăng dần trong: " + arr;
}
// ========================

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng
function timSNT() {
    let soNguyenTo = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % i !== 0 && arr[i] !== 4) {
            soNguyenTo = arr[i];
            console.log(arr[i]);
        } else {
            soNguyenTo = -1;
        }
    }
    dom("#soNguyenTo").innerHTML = "Số nguyên tố đầu tiên trong mảng: " + soNguyenTo;
}
// ========================

// Bài 9: Đếm số nguyên  
let arrFloat = [];
function themSoThuc() {
    let float = domID("float") * 1;
    arrFloat.push(float);
    dom("#arrayFloat").innerHTML = arrFloat;
    dom("#arrayFloat").style.display = "block";
    resetInput();
}

function demSoNguyen() {
    let count = 0;
    for (let i = 0; i < arrFloat.length; i++) {
        if (Number.isInteger(arrFloat[i])) {
            count++;
        } else {
            dom("#demSoNguyen").innerHTML = 0;
        }
    }
    dom("#demSoNguyen").innerHTML = "Có " + count + " số nguyên trong mảng";
}
// ========================

// Bài 10: So sánh số lượng số dương và số âm
function soSanh() {
    let am = 0, duong = 0;
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i] >= 0 ? duong++ : am++;
    }
    if (duong == am) {
        dom("#soSanh").innerHTML = "Số lượng bằng nhau";
    }else{
        let soSanh = duong < am ? "Số âm nhiều hơn" : "Số dương nhiều hơn";
        dom("#soSanh").innerHTML = soSanh
    }
}
// ========================