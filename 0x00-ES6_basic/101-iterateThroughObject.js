export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  // iterate over each item in the iterator object
  for (const [index, item] of Object.entries(reportWithIterator)) {
    // append the item to the output string
    output += `${item}`;

    // add a separator between items, except for the last item
    if (parseInt(index, 10) !== reportWithIterator.length - 1) {
      output += ' | ';
    }
  }

  // return the output string
  return output;
}
