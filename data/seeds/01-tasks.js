
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          description: 'Lorem Ipsum',
          notes: 'Testing testing test',
          completed: false
        },
        {
          id: 2,
          project_id: 1,
          description: 'Testing testing test',
          notes: 'Lorem Impsum',
          completed: true
        },
        {
          id: 3,
          project_id: 2,
          description: 'Testing testing test',
          notes: 'this is a big test',
          completed: false
        },
        {
          id: 4,
          project_id: 2,
          description: 'how ye doing ',
          notes: 'im surviving',
          completed: false
        },
        {
          id: 5,
          project_id: 3,
          description: 'she call the feds ',
          notes: 'I did my time ',
          completed: false
        },
        {
          id: 6,
          project_id: 3,
          description: 'to my suprise',
          notes: 'i had to take him to that ghetto university',
          completed: false
        }
      ]);
    });
};
