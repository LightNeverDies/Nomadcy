const textFile = require('../../utils/text.json')
const generator = require('../../utils/randomNumbers')

const findDomain = (req: any, res: any) => {
    const names: string[] = ['number', 'color', 'text']
    const footer: string[] = ['Low Risk Businesses', 'Average Businesses', 'NC IDEA']
    const colors: string[] = ['#6ce5e8', '#42b8d5', '#2e3192']
    let numbers: number[] = []
    let text: string = ''

    const info = {
        type: req.query.type,
        min: req.query.min,
        max: req.query.max
    }

    if(info.min !== undefined || info.max !== undefined) {
        numbers = generator.between(numbers, info.min, info.max)
    }

    if(info.type !== undefined) {
        if(info.type in textFile) {
            text = textFile[info.type]
        }
    }

    if(info.type === undefined || info.min === undefined || info.max === undefined) {
        res.status(404).send({
            error: 'Missing Arguments'
        })
    }


    // need to fix here should be color: '#000000', number: 666

    const values = names.map((key: any, i: any) => {
            return {
                color: colors[i],
                number: numbers[i],
                text: footer[i]
            }
    })

    const sendInfo = {
        text,
        values
    }

    res.send({
        sendInfo
    })
}

module.exports = {
    findDomain
}