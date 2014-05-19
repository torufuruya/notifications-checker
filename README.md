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

![](http://i.gyazo.com/e3dc69412800972b4636f206e2f90023.png)

If login failed, displayed like this.

![](http://i.gyazo.com/44aef9d00048ed4f8abc33179dddafc0.png)
