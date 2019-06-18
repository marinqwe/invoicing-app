const { generateName, getYear } = require('../generateName');

const Mutations = {
  async createInvoice(parent, args, ctx, info) {
    //NOTE: prisma doesn't support transactions yet
    // query name of the last invoice
    const lastInvoiceName = await ctx.db.query.names({ last: 1 }); // returns weird data format
    let name;
    // check if exists
    if (!lastInvoiceName[0]) {
      //default name if no invoices exist
      name = {
        yearIssued: getYear(),
        sfx: '000001'
      };
    } else {
      //return new generated name
      //fixes weird format from query.names
      const parsedLastInv = JSON.parse(JSON.stringify(lastInvoiceName[0]));
      name = generateName(parsedLastInv);
    }
    //create invoice
    const inv = await ctx.db.mutation.createInvoice(
      {
        data: {
          ...args
        }
      },
      info
    );

    //connect invoice & name
    const generatedName = await ctx.db.mutation.createName(
      {
        data: {
          invoice: {
            connect: {
              id: inv.id
            }
          },
          ...name
        }
      },
      info
    );
    if (generatedName) return inv;
  },

  async createItem(parent, args, ctx, info) {
    //take invoiceId out of item data
    const { invoiceId } = args;

    const item = args;
    delete item.invoiceId;

    // create item & connect it to invoice
    const newItem = await ctx.db.mutation.createItem(
      {
        data: {
          invoice: {
            connect: {
              id: invoiceId
            }
          },
          ...item
        }
      },
      info
    );
    return newItem;
  },
  async createCreditnote(parent, args, ctx, info) {
    const { invoiceId, items } = args;
    let descriptions = []
      prices = [];

    items.map(item => {
      descriptions.push(item.description)
      prices.push(-item.price)
    });

    const note = { ...args, descriptions, prices};
    delete note.invoiceId;
    delete note.items;

    const creditNote = await ctx.db.mutation.createCreditnote(
      {
        data: {
          invoice: {
            connect: {
              id: invoiceId
            }
          },
          ...note
        }
      },
      info
    );

    return creditNote;
  },
  updateInvoice(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;

    return ctx.db.mutation.updateInvoice(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },

  deleteInvoice(parent, args, ctx, info) {
    const where = { id: args.id };
    return ctx.db.mutation.deleteInvoice({ where }, info);
  },
  deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };

    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = Mutations;
