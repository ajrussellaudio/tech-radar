import { Rule } from '@sanity/types';
import { MdRadar } from 'react-icons/md';

function titleCase(str: string): string {
  return str.split('').reduce((prev, curr, i) => {
    return prev + (i === 0 ? curr.toUpperCase() : curr.toLowerCase());
  }, '');
}

export const radar = {
  name: 'blips',
  title: 'Blips',
  type: 'document',
  icon: MdRadar,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'The name of the blip, e.g. "React" or "Test-driven development"',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'ring',
      title: 'Ring',
      type: 'reference',
      to: [{ type: 'ring' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'quadrant',
      title: 'Quadrant',
      type: 'reference',
      to: [{ type: 'quadrant' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'isNew',
      title: 'Is this a new addition?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Optional.',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      quadrant: 'quadrant.name',
      ring: 'ring.name',
    },
    prepare({ title, quadrant, ring }: { title: string; quadrant: string; ring: string }) {
      const subtitle = [titleCase(ring), titleCase(quadrant)].join(' | ');
      return { title, subtitle };
    },
  },
};
