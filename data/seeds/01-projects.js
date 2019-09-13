
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: '3 on sprint',
          completed: false,
          description: 'hopefully this convinces you Ryan'
        },
        {
          id: 2,
          name: 'Become a master Jedi',
          completed: false,
          description: 'Jedi I become must'
        },
        {
          id: 3,
          name: 'Be a douchebag',
          completed: false,
          description:
            'maybe some blonde tips, raybans? idk '
        }
      ]);
    });
};
