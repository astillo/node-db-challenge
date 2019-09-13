const db = require('../data/dbConfig');

module.exports = {
    getTasks: function () {
        return db('tasks')
    },
    addTask: function (task) {
        return db('tasks')
            .insert(task)
            .then(([id]) => this.getTasks([id]))
    }
}