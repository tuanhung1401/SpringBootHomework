// Câu 2
let listItems = document.querySelectorAll("#list1 li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue";
}

// Câu 3
let list = document.getElementById("list");

// Thêm 3 thẻ li mới
let newItem1 = document.createElement("li");
newItem1.appendChild(document.createTextNode("Item 8"));
list.appendChild(newItem1);

let newItem2 = document.createElement("li");
newItem2.appendChild(document.createTextNode("Item 9"));
list.appendChild(newItem2);

let newItem3 = document.createElement("li");
newItem3.appendChild(document.createTextNode("Item 10"));
list.appendChild(newItem3);

// Sửa màu chữ cho thẻ li 1
list.childNodes[1].style.color = "red";

// Sửa background cho thẻ li 3
list.childNodes[5].style.backgroundColor = "blue";

// Xóa thẻ li 4
list.childNodes[7].remove();

// Thêm thẻ li mới
let newItem4 = document.createElement("li");
newItem4.appendChild(document.createTextNode("Item 11"));
list.insertBefore(newItem4, list.childNodes[7]);