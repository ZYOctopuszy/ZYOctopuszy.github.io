// 新增数据

function addRow() {
    let t = document.getElementById("t")
    //获取插入位置
    let l = t.rows.length;
    console.log(l);
    //插入行节点
    let newRow = t.insertRow(l);

    //插入列节点
    let nameCol = newRow.insertCell(0);
    let ageCol = newRow.insertCell(1);
    let phoneCol = newRow.insertCell(2);
    let editCol = newRow.insertCell(3);

    nameCol.innerHTML = "佚名";
    ageCol.innerHTML = "18";
    phoneCol.innerHTML = "未定义";
    editCol.innerHTML = "<button onclick='editRow(this)'>修改</button><button class=\"b-r\" onclick=\"delRow(this)\">删除</button>"

}

function delRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(button) {
    let row = button.parentNode.parentNode;

    let name = row.cells[0];
    let age = row.cells[1];
    let phone = row.cells[2];

    let nameInput = prompt("请输入名字: ");
    let ageInput = prompt("请输入年龄: ");
    let phoneInput = prompt("请输入手机号: ");

    name.innerHTML = nameInput;
    age.innerHTML = ageInput;
    phone.innerHTML = phoneInput;
}