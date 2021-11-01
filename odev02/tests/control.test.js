const { RandomControl } = require("../src/control")

test('geçersiz kart sayısı', () => {
    expect(() => { RandomControl(5) }).toThrow();
    expect(() => { RandomControl(0) }).toThrow();
    expect(() => { RandomControl(2333) }).toThrow();

})


