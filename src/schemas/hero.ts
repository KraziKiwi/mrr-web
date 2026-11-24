export default {
  name: 'hero',
  title: 'Home Page Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'The main headline (e.g., MRR Content Manager)',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'The line below the title (e.g., Building Quality)',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'The smaller orange text (e.g., That Stands the Test of Time)',
    },
    {
      name: 'description',
      title: 'Body Text',
      type: 'text',
      description: 'The two paragraphs of text below the tagline',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
