const between = (numbers: number[], min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    for(let i = 0; i < 3; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1) + min))
    }

    return numbers

}


module.exports = {
    between
}