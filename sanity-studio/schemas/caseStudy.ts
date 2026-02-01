import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'FinTech', value: 'fintech' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'E-Commerce', value: 'ecommerce' },
          { title: 'Technology', value: 'technology' },
          { title: 'Manufacturing', value: 'manufacturing' },
          { title: 'Professional Services', value: 'professional-services' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'client',
      title: 'Client Information',
      type: 'object',
      fields: [
        { name: 'name', title: 'Client Name', type: 'string' },
        { name: 'size', title: 'Company Size', type: 'string' },
        { name: 'location', title: 'Location', type: 'string' },
      ],
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'suffix', type: 'string', title: 'Suffix' },
          ],
        },
      ],
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote' },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Author Role' },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      industry: 'industry',
      media: 'image',
    },
    prepare(selection) {
      const { title, industry } = selection;
      return {
        title,
        subtitle: industry,
      };
    },
  },
});
