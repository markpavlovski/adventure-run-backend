exports.seed = function(knex, Promise) {

  const tablesToClean = [
    'users',
    'tracks',
    'checkpoints',
    'runs',
    // 'badges',
    // 'runs_checkpoints',
    // 'users_badges_runs',
    // 'guilds',
    // 'high_scores',
    // 'guilds_users'
  ].reverse()

  return tablesToClean.reduce(
    (acc, el) => acc.then(() => knex(el).del()),
    Promise.resolve()
  )

}
