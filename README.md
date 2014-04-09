Installation
---

if you have never installed casperjs, then install it on ahead.

[CasperJS](http://docs.casperjs.org/en/latest/installation.html)

clone this repository.

```
$ git clone git@github.com:torufuruya/notifications-checker.git
```

Usage
---

edit check-gree-notification.js

```js
this.fillSelectors('form#login', {
    'input[name=mail]': 'your mail',  //input your mail address
    'input[name=user_password]': 'your pass'  //input your pass
}, true);
```

if ready, run casperjs in command line.

```
$ casperjs check-gree-notification.js
```

If succeed, you can get notifications as below.
![](https://www.evernote.com/shard/s42/sh/859bb18e-cc45-45fd-82b9-1d2844623574/4e0bc024b801b10858f3e6f8333a07e9/res/c63a3b60-956a-4ca3-9b40-63e0b8b308a1/skitch.png)

If login failed, displayed like this.
![](https://www.evernote.com/shard/s42/sh/095bbbe9-a049-47de-95fb-b0ddda74c32c/7ea5b1bcaebdf7c17c41105d77c7a020/res/d698067d-5c2c-43f4-a412-3bce41ef00f2/skitch.png)
