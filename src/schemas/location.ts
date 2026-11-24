export default {
  name: 'location',
  title: 'Service Area (Location)',
  type: 'document',
  fields: [
    {
      name: 'region',
      title: 'Region Name (e.g., Perth Metro)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'suburbs',
      title: 'Suburbs / Areas',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add specific areas like "Southern suburbs" or "Bunbury"',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
