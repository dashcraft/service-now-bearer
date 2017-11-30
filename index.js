const request = require('request');


class SNBearer {
  constructor(config) {
    this.config = config;

    if (this.config) {
      //config contains the url, client id and client secret
      if (!this.config.url) throw new Error('The url was not defined!');
      if (!this.config.client_id) throw new Error('The service now client id was not defined!')
      if (!this.config.client_secret) throw new Error('The service now client secret was not defined!')
    } else {
      throw new Error('The config object was not defined!');
    }
  }

  refresh(refresh_token) {
    const options = {
      method: 'POST',
      url: `${this.config.url}/oauth_token.do`,
      form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
        client_id: this.config.client_id,
        client_secret: this.config.client_secret
      }
    };

    request(options, function (error, response, body) {
      if (error) return new Error(error);
      let access_token = JSON.parse(body);
      if (access_token.error) {
        return new Error('The refresh token was not refreshed!');
      }
      access_token.date_requested = new Date();
      return access_token;
    });
  }

  login(username, password) {
    return new Promise((resolve, reject) => {
      const options = {
        method: 'POST',
        url: `${this.config.url}/oauth_token.do`,
        form: {
          username: username,
          password: password,
          grant_type: 'password',
          client_id: this.config.client_id,
          client_secret: this.config.client_secret
        }
      };

      request(options, (error, response, body) => {
        if (error) reject(new Error(error));
        let access_token = JSON.parse(body);
        if (!access_token.access_token) {
          return new Error('Service now did not return an Auth Token');
        }
        access_token.date_requested = new Date();
        resolve(access_token);
      });
    })
  }

}

module.exports = SNBearer;
