const optionsColor = {
  name: 'color',
  values: [
    { description: 'Red', value: 'red' },
    { description: 'Yellow', value: 'yellow' },
    { description: 'Blue', value: 'blue' },
    { description: 'Orange', value: 'orange' },
    { description: 'White', value: 'white' },
  ],
}

const optionsSize = {
  name: 'size',
  values: [
    { description: 'Small', value: 's' },
    { description: 'Medium', value: 'm' },
    { description: 'Large', value: 'l' },
  ],
}

const optionsSort = {
  name: 'sort',
  attributes: [
    {
      description: 'Name (A - Z)',
      value: 'desc',
    },
    {
      description: 'Name (Z - A)',
      value: 'asc',
    },
  ],
};

const optionsShowItem = {
  name: 'show-item',
  attributes: [
    {
      description: '10 item',
      value: 10,
    },
    {
      description: '15 item',
      value: 15,
    },
    {
      description: '20 item',
      value: 20,
    },
  ],
};

export { optionsColor, optionsSize, optionsShowItem, optionsSort }