import { RiRecordCircleLine } from 'react-icons/ri';

export const ring = {
  name: 'ring',
  title: 'Ring',
  type: 'document',
  icon: RiRecordCircleLine,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
