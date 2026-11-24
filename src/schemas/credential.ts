export default {
  name: 'credential',
  title: 'Trust & Credential',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (e.g., Registered Building Contractor)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Logo/Badge (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
