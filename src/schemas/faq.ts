export default {
  name: 'faq',
  title: 'Common Question (FAQ)',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 3,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
