const state = {
    initialPhone: {},
    phone: "",
    network: "",
    capacity: "",
    color: "",
};


const phones_dom = document.getElementById('phones');
const networks_dom = document.getElementById('networks');
const capacities_dom = document.getElementById('capacities');
const colors_dom = document.getElementById('colors');
const button_dom = document.getElementById('continue');

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
            toggleActiveClass(phone_items_dom , item);
            phones.filter(phone => {
                if (phone.name == target.innerText) {
                    state.phone = phone.name;
                    state.initialPhone = phone;

                    fillNetworksData();
                }
            })
            if(state.network != '') {
                fillCapacitiesData();
                console.log('capacity');
            }
            if (state.network != '' && state.capacity != '') {
                fillColorsData();
            }
            checkStateData();
            // console.log('onClickPhone', state);
        })
    })
}

function fillNetworksData() {
    let items = '';
    let networks = state.initialPhone.networks;

    networks.forEach(network => {
        if (network.name == state.network) {
            items += `
                <div div class = "col-md-3 item network active-item">
                    <div class="option"> ${network.name} </div> 
                </div>
            `
        } else {
            items += `
                <div class="col-md-3 item network">
                    <div class="option"> ${network.name} </div> 
                </div>
            `
        }
    });
    networks_dom.innerHTML = items;
    onClickNetwork();
}

function onClickNetwork() {
    const network_items_dom = document.querySelectorAll('.network');
    let networks = state.initialPhone.networks;

    network_items_dom.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            toggleActiveClass(network_items_dom, item);
            networks.filter(network => {
                if (network.name == target.innerText) {
                    // console.log(network.name , target.innerText);
                    state.network = network.name;

                    fillCapacitiesData();
                }
            })
            if (state.capacity != '') {
                fillColorsData();
            }
            checkStateData();
            // console.log('onClickNetwork' , state);
        })
    })
}

function fillCapacitiesData() {
    let networks = state.initialPhone.networks;
    let capacities;
    let items = '';
    networks.filter(network => {
        if (network.name == state.network) {
            capacities = network.capacities;
        }
    })

    if (capacities != null) {
        capacities.forEach(capacity => {
            if (capacity.name == state.capacity) {
                items += `
                    <div div class = "col-md-3 item capacity active-item">
                        <div class="option active-item"> ${capacity.name} </div> 
                    </div>
                `
            } else {
                items += `
                    <div class = "col-md-3 item capacity">
                        <div class="option"> ${capacity.name} </div> 
                    </div>
                `
            }
        });
    }
    capacities_dom.innerHTML = items;
    onClickCapacity();
}

function onClickCapacity() {
    const capacity_items_dom = document.querySelectorAll('.capacity');
    
    let networks = state.initialPhone.networks;
    let capacities;
    networks.filter(network => {
        if (network.name == state.network) {
            capacities = network.capacities;
        }
    })

    capacity_items_dom.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            toggleActiveClass(capacity_items_dom, item);
            capacities.filter(capacity => {
                if (capacity.name == target.innerText) {
                    state.capacity = capacity.name;

                    fillColorsData();
                }
            })
            checkStateData();
            // console.log('onClickCapacity' , state);
        })
    })
}

function fillColorsData() {
    let networks = state.initialPhone.networks;
    let capacities;
    let colors;
    let items = '';
    networks.filter(network => {
        if (network.name == state.network) {
            capacities = network.capacities;
            capacities.filter(capacity => {
                if (capacity.name == state.capacity) {
                    colors = capacity.colors;
                }
            })
        }
    })

    if (colors != null) {
        colors.forEach(color => {
            if (color.name == state.color) {
                items += `
                    <div div class = "col-md-3 item color active-item">
                        <div class="option"> ${color.name} </div> 
                    </div>
                `
            } else {
                items += `
                    <div class = "col-md-3 item color">
                        <div class="option"> ${color.name} </div> 
                    </div>
                `
            }
        });
    }
    colors_dom.innerHTML = items;
    onClickColor();
}

function onClickColor() {
    const color_items_dom = document.querySelectorAll('.color');

    let networks = state.initialPhone.networks;
    let capacities;
    let colors;
    networks.filter(network => {
        if (network.name == state.network) {
            capacities = network.capacities;
            capacities.filter(capacity => {
                if (capacity.name == state.capacity) {
                    colors = capacity.colors;
                }
            })
        }
    })

    color_items_dom.forEach(item => {
        item.addEventListener('click', ({ target }) => {
            toggleActiveClass(color_items_dom, item);
            colors.filter(color => {
                if (color.name == target.innerText) {
                    state.color = color.name;
                }
            })
            checkStateData();
            console.log('onClickColor' , state);
        })
    })
}

function checkStateData() {
    console.log(state);
    
    let networks = state.initialPhone.networks;

    let isNetwork = false;
    networks.forEach(network => {
        if (network.name == state.network) {
            isNetwork = true;
        }
    })

    if (isNetwork) {
        let capacities;
        networks.filter(network => {
            if (network.name == state.network) {
                capacities = network.capacities;
            }
        })

        let isCapacity = false;
        capacities.forEach(capacity => {
            if (capacity.name == state.capacity) {
                isCapacity = true;
            }
        })
        if (isCapacity) {
            let colors;
            capacities.filter(capacity => {
                if (capacity.name == state.capacity) {
                    colors = capacity.colors;
                }
            })

            let isColor = false;
            colors.forEach(color => {
                if (color.name == state.color) {
                    isColor = true;
                }
            })
            if (!isColor) {
                state.color = '';
            }
        } else {
            state.capacity = '';
        }

    } else {
        state.network = '';
    }


    if (state.phone != '' && state.network != '' && state.capacity != '' && state.color != '') {
        button_dom.removeAttribute('disabled');
    } else {
        button_dom.setAttribute('disabled', 'disabled');
    }
    
}

function toggleActiveClass(domHtml,item) {
    domHtml.forEach(item => {
        item.classList.remove('active-item');
    });

    item.classList.add('active-item');
}

button_dom.addEventListener('click', () => {
    console.log(state);
    let product = {
        phone: state.phone,
        network: state.network,
        capacity: state.capacity,
        color: state.color
    }
    localStorage.setItem('product', JSON.stringify(product));
    window.location.href = './show.html';
});