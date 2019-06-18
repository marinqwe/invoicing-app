function generateName({ yearIssued: lastInvoiceYear, sfx: lastInvoiceSuffix }) {
  const currentYear = getYear();

  if (lastInvoiceYear === currentYear) {
    const suffix = ('000000' + (parseInt(lastInvoiceSuffix, 10) + 1)).slice(-6);
    return {
      yearIssued: currentYear,
      sfx: suffix
    };
  }
  return {
    yearIssued: currentYear,
    sfx: '000001'
  };
}

//for default name in Mutation.js (createInvoice)
function getYear() {
  return new Date()
    .getFullYear()
    .toString()
    .substr(-2);
}

exports.getYear = getYear;
exports.generateName = generateName;
