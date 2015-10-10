'use strict';

var test = require('tape'),
    prop = require('..');

test('prop factory', function(assert) {
    assert.plan(5);

    var value = prop();
    assert.equal(value(), undefined,
        'should have default value of undefined');

    assert.equal(value('a value'), 'a value',
        'should return argument that was passed)');

    assert.equal(value(), 'a value',
        'should set value to argument passed');

    value = prop('default value');
    assert.equal(value(), 'default value',
        'should allow default value to be specified');

    var data = { foo: prop('bar') };
    assert.deepEqual(JSON.stringify(data), JSON.stringify({ foo: 'bar' }),
        'should be JSON-serializable');

    assert.end();
});
