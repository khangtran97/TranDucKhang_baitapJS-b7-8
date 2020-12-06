var arrayNumber = [];

function themMang() {
    var num = document.getElementById('inputSo').value * 1;
    arrayNumber.push(num);
    document.getElementById('inputSo').value = '';
    console.log(arrayNumber);

}
document.getElementById('themSo').onclick = themMang;

function sumDuong() {
    var sum = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            sum += arrayNumber[i];
        }
    }
    document.getElementById('txtThongBao').innerHTML = 'Tổng các số dương trong mảng: ' + sum;
}
document.getElementById('tongDuong').onclick = sumDuong;

function countDuong() {
    var count = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            count++;
        }
    }
    document.getElementById('txtThongBao').innerHTML = 'Số lượng số dương trong mảng: ' + count;
}
document.getElementById('soDuong').onclick = countDuong;

function minNum() {
    var min = arrayNumber[0];
    var tmp = 0;
    for (var i = 1; i < arrayNumber.length; i++) {
        if (min > arrayNumber[i]) {
            tmp = min;
            min = arrayNumber[i];
            arrayNumber[i] = tmp;
        }
    }
    document.getElementById('txtThongBao').innerHTML = 'Số nhỏ nhất trong mảng: ' + min;
}
document.getElementById('soMin').onclick = minNum;

function minDuong() {
    var min = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            min = arrayNumber[i];
        }
    }
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0 && arrayNumber[i] < min) {
            min = arrayNumber[i];
        }
    }
    document.getElementById('txtThongBao').innerHTML = 'Số dương nhỏ nhất trong mảng: ' + min;
}
document.getElementById('soMinDuong').onclick = minDuong;

function lastEven() {
    var viTri = -1;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] % 2 == 0) {
            viTri = i;
        }
    }
    if (viTri > 0) {
        document.getElementById('txtThongBao').innerHTML = 'Số chẵn cuối cùng trong mảng: ' + arrayNumber[viTri];
    } else {
        document.getElementById('txtThongBao').innerHTML = 'Mảng không có số chẵn!';
    }
}
document.getElementById('soChanCuoi').onclick = lastEven;

function changePosition() {
    var viTri1 = document.getElementById('input1').value;
    var viTri2 = document.getElementById('input2').value;
    var content = '';

    var tmp = arrayNumber[viTri1];
    arrayNumber[viTri1] = arrayNumber[viTri2];
    arrayNumber[viTri2] = tmp;

    for (var i = 0; i < arrayNumber.length; i++) {
        content += arrayNumber[i] + ' ';
    }
    document.getElementById('txtThongBao2').innerHTML = 'Mảng sau khi đổi vị trí: ' + content;
}
document.getElementById('doiViTri').onclick = changePosition;

function orderArray() {
    var tmp = 0;
    var content = '';
    for (var i = 0; i < arrayNumber.length - 1; i++) {
        for (var j = i + 1; j < arrayNumber.length; j++) {
            if (arrayNumber[i] > arrayNumber[j]) {
                tmp = arrayNumber[i];
                arrayNumber[i] = arrayNumber[j];
                arrayNumber[j] = tmp;
            }
        }
    }

    for (var i = 0; i < arrayNumber.length; i++) {
        content += arrayNumber[i] + ' ';
    }
    document.getElementById('txtThongBao').innerHTML = 'Mảng sau khi sắp xếp: ' + content;
}
document.getElementById('sapXep').onclick = orderArray;