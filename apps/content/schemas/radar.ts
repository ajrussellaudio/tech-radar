import { Rule } from '@sanity/types';

export const radar = {
  name: 'radar',
  title: 'Tech Radar',
  type: 'document',
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
      type: 'string',
      options: {
        list: ['adopt', 'assess', 'trial', 'hold'],
        layout: 'radio',
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'quadrant',
      title: 'Quadrant',
      type: 'string',
      options: {
        list: [
          { title: 'Techniques', value: 'techniques' },
          { title: 'Platforms', value: 'platforms' },
          { title: 'Tools', value: 'tools' },
          { title: 'Languages & Frameworks', value: 'languages' },
        ],
        layout: 'radio',
      },
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
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
