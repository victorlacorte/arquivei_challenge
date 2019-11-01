const discounts = [
    {
        max: 1000,
        price: 0.09
    },
    {
        max: 1000,
        price: 0.16
    },
    {
        max: Infinity,
        price: 0.24
    }
]

/**
 * 
 * @param {*} number_consults 
 * @param {*} discounts 
 */
function price(number_consults) {
    let total = 0

    for (let i = 0; i < discounts.length; i++) {
        if (number_consults > discounts[i].max) {
            total += discounts[i].max * discounts[i].price
            number_consults -= discounts[i].max
        }
        else {
            return total + number_consults * discounts[i].price
        }
    }
}

export {
    price
}