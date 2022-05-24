const phones_arr = [
    'iPhone 12 Pro Max',
    'iPhone 12 Pro',
    'iPhone 12',
    'iPhone 12 mini',
    'iPhone 11 Pro Max',
    'iPhone 11 Pro',
    'iPhone 11',
    'iPhone XS Max',
    'iPhone XS',
    'iPhone XR',
    'iPhone X',
    'iPhone 8 Plus',
    'iPhone 8',
    'iPhone 7 Plus',
    'iPhone 7',
    'iPhone SE 2020',
    'iPhone SE',
    'iPhone 6s Plus',
    'iPhone 6s',
    'iPhone 6 Plus',
    'iPhone 6'
];

const networks_arr = [
    'AT&T',
    'Verizon Wireless',
    'sprint',
    'T-mobile',
    'Unlocked',
    'Verizon',
    'other'
];

const capacities_arr = [
    '16GB',
    '32GB',
    '64GB',
    '128GB',
    '256GB',
    '512GB'
];

const colors_arr = [
    'Gold',
    'Silver',
    'Pacific Blue',
    'Graphite',
    'Black',
    'Red',
    'White',
    'Blue',
    'Green',
    'Space Gray',
    'Midnight Green',
    'Yellow',
    'Purple',
    'Coral',
    'Product Red',
    'Jet Black',
    'Rose Gold'
];


const mobiles = [];

// phones_arr.forEach(phone => {
//     const obj = {};
//     obj.name = phone;
//     let networks_obj = [];

//     for (let i = 0; i < Math.floor(Math.random() * 4) + 4; i++) {
//         let index = Math.floor(Math.random() * networks_arr.length);
//         if (!networks_obj.includes(networks_arr[index])) {
//             networks_obj.push(
//                 {
//                     name: networks_arr[index],
//                     capacities: [],
//                 }
//             );
//         }

//         for (let j = 0; j < Math.floor(Math.random() * 3) + 3; j++) {
//             let index = Math.floor(Math.random() * capacities_arr.length);
//             if (!networks_obj[i].capacities.includes(capacities_arr[index])) {
//                 networks_obj[i].capacities.push(
//                     {
//                         name: capacities_arr[index],
//                         colors: [],
//                     }
//                 );
//             }

//             for (let k = 0; k < Math.floor(Math.random() * 3) + 3; k++) {
//                 let index = Math.floor(Math.random() * colors_arr.length);
//                 if (!networks_obj[i].capacities[j].colors.includes(colors_arr[index])) {
//                     networks_obj[i].capacities[j].colors.push(
//                         {
//                             name: colors_arr[index],
//                         }
//                     );
//                 }
//             }

//         }


//     }
//     obj.networks = networks_obj;
//     mobiles.push(obj);
// });

// console.log(mobiles);

// let json = JSON.stringify(mobiles);
// console.log(json);

