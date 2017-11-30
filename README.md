# Service Now Bearer Token API

This is a `node module` that helps with issues getting a bearer token for oauth in service now.


## Prerequisites

`node version 6+`

## Installation

Install the node package with `npm install SNBearer`
Include SNBearer in your route:
```
import { SNBearer } from 'SNBearer';
or
const SNBearer = require('SNBearer');
```

## How To Use

### Instatiation

You must pass a config object into SNBearer during module creation. The config object 
must resemble the following:
```
 {
    url: 'https://servicenow-instance.servicen-now.com',
    client_id: 'client id from service now CORS application setup',
    client_secret: 'client secret from service now CORS Application setup'
 }
```

Then you pass config into the SNBearer Constructor:
```
import { SNBearer } from 'SNBearer';

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
