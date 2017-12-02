# Service Now Bearer Token API

This is a `node module` that helps with issues getting a bearer token for oauth in service now.


## Prerequisites

`node version 6+`

## Installation

Install the node package with `npm install service-now-bearer`

Include service-now-bearer in your route:

```
import { SNBearer } from 'service-now-bearer';
or
const SNBearer = require('service-now-bearer');
```

## How To Use

### Instantiation

You must pass a config object into SNBearer during module creation. The config object 
must resemble the following:

```
 {
    url: 'https://servicenow-instance.service-now.com',
    client_id: 'client id from service now CORS application setup',
    client_secret: 'client secret from service now CORS Application setup'
 }
```

Then you can pass the config into the service-now-bearer Constructor:

```
import { SNBearer } from 'service-now-bearer';

let config = { ... };

let snb = new SNBearer(config);

```

### API

* Login `SNBearer.login(username, password)` returns a promise that resolves to an access_token object
* Refresh `SNBearer.refresh(refresh_token)` returns a promise that resolves to a new access_token object

## Testing

You can run tests by using `jest`

First Install Jest
`npm install -g jest`

Second run tests or watch tests
`jest --watchAll` 
or
`npm test`

All tests are located inside of the tests folder
