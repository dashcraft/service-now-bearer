const SNBearer = require('../index');


test('SNBearer to be instance of SNBearer', () => {
  let snb = new SNBearer({
    url: 'url.com',
    client_id: 'someid',
    client_secret: 'somesecret'
  });
  expect(snb).toBeInstanceOf(SNBearer);
});


test('SNBearer return instantiated Values should return all config props', () => {
  let snb = new SNBearer({
    url: 'url.com',
    client_id: 'someid',
    client_secret: 'somesecret'
  });
  expect(snb.returnInstantiatedValues()).toMatchObject({
    url: 'url.com',
    client_id: 'someid',
    client_secret: 'somesecret'
  });
});

test('SNBearer should throw error without config defined', () => {
  // let snb = new SNBearer({
  //   client_id: 'someid',
  //   client_secret: 'somesecret'
  // });
  return expect(() => {
    new SNBearer()
  }).toThrow('The config object was not defined!');

});

test('SNBearer should throw error without url defined', () => {
  // let snb = new SNBearer({
  //   client_id: 'someid',
  //   client_secret: 'somesecret'
  // });
  return expect(() => {
    new SNBearer({
      client_id: 'someid',
      client_secret: 'somesecret'
    })
  }).toThrow('The url was not defined!');

});

test('SNBearer should throw error without client id defined', () => {
  // let snb = new SNBearer({
  //   client_id: 'someid',
  //   client_secret: 'somesecret'
  // });
  return expect(() => {
    new SNBearer({
      url: 'url.com',
      client_secret: 'somesecret'
    })
  }).toThrow('The service now client id was not defined!');

});

test('SNBearer should throw error without client secret defined', () => {
  // let snb = new SNBearer({
  //   client_id: 'someid',
  //   client_secret: 'somesecret'
  // });
  return expect(() => {
    new SNBearer({
      url: 'url.com',
      client_id: 'someid'
    })
  }).toThrow('The service now client secret was not defined!');

});
