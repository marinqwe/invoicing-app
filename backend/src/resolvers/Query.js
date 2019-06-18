const { forwardTo } = require('prisma-binding');

const Query = {
  invoice: forwardTo('db'),
  names: forwardTo('db'),
  invoicesConnection: forwardTo('db'),
  invoices: forwardTo('db'),
  items: forwardTo('db'),
  creditnotes: forwardTo('db'),
};

module.exports = Query;
