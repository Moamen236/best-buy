const initialState = {
    phone: {},
    networks: [],
    capacities: [],
    colors: [],
};

const state = {
    phone : "",
    network : "",
    capacity : "",
    color : "",
};


const phones_dom = document.getElementById('phones');
const networks_dom = document.getElementById('networks');
const capacities_dom = document.getElementById('capacities');
const colors_dom = document.getElementById('colors');
const button_dom = document.getElementById('end');

$.getJSON("test.json", function (phones) {
    // console.log(phones);
    fillPhonesData(phones);

});

function fillPhonesData(phones) {
    let items = '';
    phones.forEach(phone => {
        items += `
            <div class="col-md-3 item phone">
                <div class="option"> ${phone.name} </div> 
            </div>
        `
    });
    phones_dom.innerHTML = items;
    onClickPhone(phones);
}

function onClickPhone(phones) {
    const phone_items_dom = document.querySelectorAll('.phone');

    phone_items_dom.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            target.classList.add('active-item');
            phones.filter(phone => {
                if (phone.name == target.innerText) {
                    state.phone = phone.name;
                    initialState.phone = phone;
                    initialState.networks = [];
                    phone.network.forEach(network => {
                        if (!initialState.networks.includes(network.name))
                            initialState.networks.push(network.name);
                    })


                    fillNetworksData(phone);
                }
            })
            console.log(initialState);
        })
    })
}

function fillNetworksData(phone) {
    let items = '';
    let networks = phone.network;
    initialState.networks.forEach(network => {
        if (network == state.network) {
            items += `
                <div class="col-md-3 item network">
                    <div class="option active-item"> ${network} </div> 
                </div>
            `
        } else {
            items += `
                <div class="col-md-3 item network">
                    <div class="option"> ${network} </div> 
                </div>
            `
        }
    });
    networks_dom.innerHTML = items;
    onClickNetwork(networks);
}

function onClickNetwork(networks) {
    const network_items_dom = document.querySelectorAll('.network');
    network_items_dom.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            target.classList.add('active-item');
            networks.filter(network => {
                if (network.name == target.innerText) {
                    state.network = network.name;

                    initialState.capacities = [];
                    network.capacity.forEach(capacity => {
                        if (!initialState.capacities.includes(capacity.name))
                            initialState.capacities.push(capacity.name);
                    })

                    fillCapacitiesData(network);
                }
            })
            console.log(initialState);
        })
    })
}

function fillCapacitiesData(network) {
    let items = '';
    let capacities = network.capacity;
    initialState.capacities.forEach(capacity => {
        if (capacity == state.capacity) {
            items += `
                <div class = "col-md-3 item capacity">
                    <div class="option active-item"> ${capacity} </div> 
                </div>
            `
        } else {
            items += `
                <div class = "col-md-3 item capacity">
                    <div class="option"> ${capacity} </div> 
                </div>
            `
        }
    });
    capacities_dom.innerHTML = items;
    onClickCapacity(capacities);
    
}

function onClickCapacity(capacities) {
    const capacity_items_dom = document.querySelectorAll('.capacity');
    capacity_items_dom.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            target.classList.add('active-item');
            capacities.filter(capacity => {
                if (capacity.name == target.innerText) {
                    state.capacity = capacity.name;

                    initialState.colors = [];
                    capacity.color.forEach(color => {
                        if (!initialState.colors.includes(color))
                            initialState.colors.push(color);
                    })


                    fillColorsData(capacity);
                }
            })
            console.log(initialState);
        })
    })
}

function fillColorsData(capacity) {
    let items = '';
    let colors = capacity.color;
    initialState.colors.forEach(color => {
        if (color == state.color) {
            items += `
                <div class="col-md-3 item color">
                    <div class="option active-item"> ${color} </div> 
                </div>
            `
        } else {
            items += `
                <div class="col-md-3 item color">
                    <div class="option"> ${color} </div> 
                </div>
            `
        }
    });
    colors_dom.innerHTML = items;
    onClickColor();
}

function onClickColor() {
    const color_items_dom = document.querySelectorAll('.color');
    color_items_dom.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            target.classList.add('active-item');
            state.color = target.innerText
            console.log(initialState);
            console.log(state);
            if (state.color != "")
                button_dom.removeAttribute('disabled')
        })
    })
}



function fillData(obj, key) {
    console.log(obj, key);
    let options = Object.values(obj).filter((value) => {
        if (Array.isArray(value))
            return value;
    });

    let items = '';
    options[0].forEach(option => {
        items += `
            <div class="col-md-3 item network">
                <div class="option"> ${option.name} </div> 
            </div>
        `
    });
    networks_dom.innerHTML = items;
}