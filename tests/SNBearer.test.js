const SNBearer = require('../index');


const token = {
  access_token: "e5PeWLVThomUqRY6Vd8uZOrkoxvb_18DDed7vNijLSaM-fB4ooV1Nv6PDWNFDSrNRAeNgN0-8aaxY8RiHt5C8w",
  refresh_token: "yStD1K1Rn82pFuWtMjgJ07lPAMH1KxFjvfwj3hA_KS9RlK40FAxzyYAR2kqIsz7O-7D9H8lEHp4P5WdPtS4sSQ",
  scope: "useraccount",
  token_type: "Bearer",
  expires_in: 1799,
  date_requested: "2017-11-15T17:42:01.006Z",
}


describe('Test suite for Service now Bearer token api', () => {

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

})
