import { Rule } from '@sanity/types';
import { MdRadar } from 'react-icons/md';
import { GiBrainstorm, GiPlatform } from 'react-icons/gi';
import { FaCode, FaTools } from 'react-icons/fa';

type Ring = 'adopt' | 'assess' | 'trial' | 'hold';
type Quadrant = 'techniques' | 'platforms' | 'tools' | 'languages';

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
      description: 'Optional.',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      quadrant: 'quadrant',
      ring: 'ring',
    },
    prepare({ title, quadrant, ring }: { title: string; quadrant: Quadrant; ring: Ring }) {
      const media = {
        techniques: GiBrainstorm,
        platforms: GiPlatform,
        tools: FaTools,
        languages: FaCode,
      }[quadrant];
      const subtitle = [titleCase(ring), titleCase(quadrant)].join(' | ');
      return { title, subtitle, media };
    },
  },
};
