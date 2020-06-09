function calcData() {
    return [
        {'func': 'calc(3).v', 'result': 3},
        {'func': 'calc(3).add(5).v ', 'result': 8},
        {'func': 'calc(3).minus(2).v', 'result': 1},
        {'func': 'calc(4).sqrt().v', 'result': 2},
        {'func': 'calc(3).times(10).v', 'result': 30},
        {'func': 'calc(10).divide(2).v', 'result': 5},
        {'func': 'calc(10).modulo(5).v', 'result': 0},
        {'func': 'calc(3).add(4).minus(3).times(6).v', 'result': 24}
    ];
}

module.exports = {
    calcData
}