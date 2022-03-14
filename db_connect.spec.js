const {isConnect} = require('./db/config')

test('연결된 상황', ()=> {
    expect(isConnect().isEqual(True));
});

test('연결이 되지 않은 상황' , ()=> {
    expect(() => {
        isConnect()
    }).toThrow();
});