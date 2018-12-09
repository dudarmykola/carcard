export const OPTIONS_BODY = [
    { key: 's', text: 'Sedan', value: 'sedan' },
    { key: 'h', text: 'Hatchback', value: 'hatchback' },
    { key: 'co', text: 'Crossover', value: 'crossover' },
    { key: 'c', text: 'Coupe', value: 'coupe' },
    { key: 'ca', text: 'Cabriolet', value: 'cabriolet' },
    { key: 'w', text: 'Wagon', value: 'wagon' },
    { key: 'suv', text: 'Suv', value: 'suv' },
    { key: 'p', text: 'Pickup', value: 'pickup' },
];

export const OPTIONS_LAYOUT = [
    { key: 'f', text: 'Front-wheel-drive', value: 'front' },
    { key: 'r', text: 'Rear-wheel-drive', value: 'rear' },
    { key: 'a', text: 'Four-wheel-drive', value: 'four' },
];

export const OPTIONS_TRANSMISSION = [
    { key: 'm', text: 'Manual', value: 'manual' },
    { key: 'a', text: 'Automatic', value: 'automatic' },
    { key: 'cvt', text: 'CVT', value: 'cvt' },
    { key: 'sadc', text: 'Semi-automatic and dual-clutch', value: 'sadc' },
];

export const OPTIONS_FUEL = [
    { key: 'p', text: 'Petrol', value: 'petrol' },
    { key: 'd', text: 'Diesel', value: 'diesel' },
    { key: 'l', text: 'LPG', value: 'lpg' },
    { key: 'c', text: 'CNG', value: 'cng' },
    { key: 'f', text: 'FCEV', value: 'fcev' },
    { key: 'e', text: 'Electric', value: 'electric' },
];

export const OPTIONS_YEAR = (() => {
    const d = new Date();
    const currYear = d.getFullYear();
    const dateArr = [];
    for ( let i = 1900; i <= currYear; i++ ) {
        dateArr.push({
            key  : i,
            text : i,
            value: i
        });
    }
    return dateArr;
})();

export const OPTIONS_COLOR = [
    { key: 'white', text: 'White', value: 'white'},
    { key: 'black', text: 'Black', value: 'black'},
    { key: 'gray', text: 'Gray', value: 'gray'},
    { key: 'red', text: 'Red', value: 'red'},
    { key: 'orange', text: 'Orange', value: 'orange'},
    { key: 'yellow', text: 'Yellow', value: 'yellow'},
    { key: 'green', text: 'Green', value: 'green'},
    { key: 'blue', text: 'Blue', value: 'blue'},
    { key: 'indigo', text: 'Indigo', value: 'indigo'},
    { key: 'violet', text: 'Violet', value: 'violet'},
];










