// tạo chuỗi json từ value và text của select box
function createJsonBySelectOption() {
    var javascriptObject = {};
    $("#orderform-category option").each(function () {
        javascriptObject[this.value] = $(this).text();
    });
    console.log(javascriptObject);
}
