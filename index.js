function dom(selector) {
    return document.querySelector(selector);
}

function resetInput() {
    dom("#number").value = "";
}

let arr = [];
function themSo() {
    let number = dom("#number").value * 1;
    arr.push(number);
    dom("#array").innerHTML = arr;
    dom("#array").style.display = "block";
    resetInput();
}

function tinhTong() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
    dom("#tongSoDuong").innerHTML = sum;
}

function demSo() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    console.log(count);
    dom("#demSoDuong").innerHTML = count;
}

function soNhoNhat() {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        console.log(min);
        dom("#soNhoNhat").innerHTML = min;
    }
}

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
        dom("#soDuongNhoNhat").innerHTML = min;
    }
}

function soChanCuoi() {
    let evenNum = 0;
    // arr.reverse();
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum = arr[i];
        }
    }
    console.log(evenNum);
    dom("#soChanCuoi").innerHTML = evenNum;
}
