var assert = require('chai').assert
var minimize = require('../script/minimize')

describe('minimize', function() {
    it('returns empty string if passed an empty string', function() {
        assert.equal(minimize(''), '')
    })

    it('returns original if it cannot be reduced', function() {
        var cases = [
            '0', '1', '2', '3',
            '00', '11', '22', '33',
            '01', '03',
            '10', '12',
            '23', '21',
            '30', '32',
            '1111111222222', '000',
            '01010101010', '32323232333',
            '0112', '2330'
        ]
        cases.forEach(function(c) {
            assert.equal(minimize(c), c)
        })
    })

    it('reduces single linear redundancies', function() {
        var cases = [
            ['02', ''],
            ['13', ''],
            ['20', ''],
            ['31', '']
        ]
        cases.forEach(function(c) {
            assert.equal(minimize(c[0]), c[1])
        })
    })

    it('reduces multiple linear redundancies', function() {
        var cases = [
            ['020202', ''],
            ['000222', ''],
            ['33311', '3'],
            ['02130231', ''],
            ['00330022', '0033']
        ]
        cases.forEach(function(c) {
            assert.equal(minimize(c[0]), c[1])
        })
    })

    it('reduces single turning redundancies', function() {
        var cases = [
            ['012', '1'],
            ['032', '3'],
            ['210', '1'],
            ['230', '3'],
            ['123', '2'],
            ['103', '0'],
            ['321', '2'],
            ['301', '0']
        ]
        cases.forEach(function(c) {
            assert.equal(minimize(c[0]), c[1])
        })
    })

    it('reduces multiple turning redundancies', function() {
        var cases = [
            ['00122', '1'],
            ['00322', '3'],
            ['2221000', '1'],
            ['2223000', '3'],
            ['111123333', '2'],
            ['111111103333333', '0'],
            ['330111', '01']
        ]
        cases.forEach(function(c) {
            assert.equal(minimize(c[0]), c[1])
        })
    })

    it('reduces complex redundancies', function() {
        var cases = [
            ['0123', ''],
            ['0133211', '1'],
        ]
        cases.forEach(function(c) {
            assert.equal(minimize(c[0]), c[1])
        })
    })
})