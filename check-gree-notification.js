var casper = require('casper').create();
var notif = [];

casper.start('http://sns.gree.net', function() {
    this.fillSelectors('form#login', {
        'input[name=mail]': 'your mail',
        'input[name=user_password]': 'your pass'
    }, true);
});

casper.then(function() {
    this.evaluateOrDie(function() {
        return /GREE/.test(document.title);
    }, 'Login failed.');
});

casper.then(function() {
    notif = this.evaluate(function() {
        var elements = __utils__.findAll('div.x-small.bold');
        return Array.prototype.map.call(elements, function(el) {
            return el.innerText;
        });
    });
});

casper.run(function() {
    this.echo(notif.length + ' new notifications exists.', 'INFO_BAR');
    this.echo(' - ' + notif.join('\n - ')).exit();
});
