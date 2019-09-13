
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources_for_project').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources_for_project').insert([
        { id: 1, project_id: 3, resource_id: 1 },
        { id: 2, project_id: 1, resource_id: 2 },
        { id: 3, project_id: 3, resource_id: 2 },
        { id: 4, project_id: 2, resource_id: 3 },
        { id: 5, project_id: 2, resource_id: 4 },
        { id: 6, project_id: 2, resource_id: 5 },
      ]);
    });
};
