// const ctx = document.querySelector('#myChart').getContext('2d')
// const ctx = document.querySelector('#myChart')

const data = [
    {
        "day": "mon",
        "amount": 17.45,
        "backgroundColor": "hsl(10, 79%, 65%)"
    },
    {
        "day": "tue",
        "amount": 34.91,
        "backgroundColor": "hsl(10, 79%, 65%)"
    },
    {
        "day": "wed",
        "amount": 52.36,
        "backgroundColor": "hsl(186, 34%, 60%)"
    },
    {
        "day": "thu",
        "amount": 31.07,
        "backgroundColor": "hsl(10, 79%, 65%)"
    },
    {
        "day": "fri",
        "amount": 23.39,
        "backgroundColor": "hsl(10, 79%, 65%)"
    },
    {
        "day": "sat",
        "amount": 43.28,
        "backgroundColor": "hsl(10, 79%, 65%)"
    },
    {
        "day": "sun",
        "amount": 25.48,
        "backgroundColor": "hsl(10, 79%, 65%)"
    }
]

const labelData = data.map((d) => d.day)
const amountData = data.map((a) => a.amount)
const colorData = data.map((c) => c.backgroundColor)

const dataConfig = {
    labels: labelData,
    datasets: [{
        label: 'Amount Chart',
        data: amountData,
        backgroundColor: colorData,
        borderRadius: '10px'
    }]
}

const config = {
    type: 'bar',
    data: dataConfig,
    option: {}
}

const chart = new Chart(
    document.querySelector('#myChart'),
    config
)

chart

