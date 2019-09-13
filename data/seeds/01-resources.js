
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          name: 'Bill Gates',
          description: '$$$'
        },
        {
          id: 2,
          name: 'Walter White',
          description: 'Say my name'
        },
        {
          id: 3,
          name: 'Jesse Pinkman',
          description: '*****!'
        },
        {
          id: 4,
          name: 'Skylar White',
          description: 'did you also tell him about my affair?'
        },
        {
          id: 5,
          name: 'Hank Scrater',
          description: 'Youre the smartest man I know and youre too stupid to see he made up his mind 10 minutes ago'
        }
      ]);
    });
};
