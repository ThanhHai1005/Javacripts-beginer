console.log(`hello word from HTML`)
// API là cách thức đẻ giao diện tức là bên FE gọi BA lấy data
//về cái API đg link phía sever trả ra data
//(data thường nhận dưới dạng Object hoặc Array)

let a = 10;

let b = `Gwen`;

let c = '';


// key: value
let obj = {
    name: 'Gwen',
    address: 'Ho Chi Minh',
    email: '',
    gender: '',
    a: function () {
        console.log(`Hello word inside function`)
        return ''
    }
};


let d = 'name';

// obj[d] = 'Hai';
obj.name = 'YEN';

// JSON khac OBJ bởi dấu nháy đôi: JSON_chuẩn giao tiếp FE BE dưới dạng Obj


console.log(`type of a: `, typeof a, `; type of b:`, typeof b)

console.log(`what is your name ?`, `my name is:`, obj['name'])

console.log(`what are your from ?`, `I'm from:`, obj.address)

console.log(`call function: `, obj.a())

