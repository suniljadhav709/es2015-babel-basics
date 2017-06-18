//console.log('Hello world');
var Person = Class.Create({
    initialize: function(name) {

    },
    say: function(message) {
        return this.name + ' says ' + message;
    }

});
export var Man = Class.Create(person, {
    say: function($super, message) {
        return 'Fuck it...! ' + this.name + ' says ' + message;
    }
});

//var man = new Man('Sunil');
//man.say('Let there be light');

export default Person;