/**
 * 
 * @param {string} directions 
 * @return {string} directions without redundancies
 */
function minimize(directions) {
    rules = [
        [/02/g, ''],
        [/13/g, ''],
        [/20/g, ''],
        [/31/g, ''],
        [/012/g, '1'],
        [/210/g, '1'],
        [/123/g, '2'],
        [/321/g, '2'],
        [/230/g, '3'],
        [/032/g, '3'],
        [/301/g, '0'],
        [/103/g, '0'],
    ]
    for (var i = 0; i < rules.length; i++) {
        var rule = rules[i]
        var reduced = directions.replace(rule[0], rule[1])
        while (reduced != directions) {
            directions = reduced
            reduced = directions.replace(rule[0], rule[1])
            i = -1
        }
    }
    return directions
}

module.exports = minimize