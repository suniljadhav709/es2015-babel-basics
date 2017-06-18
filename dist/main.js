'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//console.log('Hello world');
var Person = Class.Create({
    initialize: function initialize(name) {},
    say: function say(message) {
        return this.name + ' says ' + message;
    }

});
var Man = exports.Man = Class.Create(person, {
    say: function say($super, message) {
        return 'Fuck it...! ' + this.name + ' says ' + message;
    }
});

//var man = new Man('Sunil');
//man.say('Let there be light');

exports.default = Person;