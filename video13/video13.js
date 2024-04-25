console.log('hello word from HTML')

let arrTop4 = ['Liver', 'Manciti', 'MU', 'Chealse']

let i = 0;
// while (i < arrTop4.length) {
//     if (arrTop4[i].length === 2) {
//         console.log('TOP ', i + 1, arrTop4[i]);
//     } else if (arrTop4[i].length === 5) {
//         console.log('TOP ', i + 1, arrTop4[i]);
//     }
//     i++;
// }


// while (i < arrTop4.length) {
//     console.log('check i', i);
//     if (arrTop4[i] === 'MU') {
//         console.log('found it', arrTop4[i]);
//         break;
//     }
//     i++;
// }


while (i < arrTop4.length) {
    i++;
    if (arrTop4[i] === 'Liver') {
        console.log('found it', arrTop4[i])
        continue;
    }


    console.log('>>> check i:', i)
}