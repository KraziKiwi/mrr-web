export default {
  name: 'mission',
  title: 'Mission Statement',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'The main heading for the mission section',
    },
    {
      name: 'highlightText',
      title: 'Highlight Text',
      type: 'text',
      description: 'Larger, bold text to catch the eye',
    },
    {
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'text',
      description: 'Full text explaining your mission and values',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Photo of Darryl on site or similar',
    },
    {
      name: 'points',
      title: 'Key Points',
      type: 'array',
      description: 'The bullet points below the description (e.g. Transparent, Hands-On, Local)',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g. TRANSPARENT'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'e.g. A clear build process...'
            }
          ]
        }
      ],
      initialValue: [
        {
          _type: 'object',
          title: 'Transparent',
          description: 'A clear build process. You always know where your job is at.'
        },
        {
          _type: 'object',
          title: 'Hands-On',
          description: 'Our directors are involved in every job, with our own in-house bricklayers and carpenters on the tools.'
        },
        {
          _type: 'object',
          title: 'Local',
          description: 'Long-term relationships with local suppliers, trades and partners across Perth and the South West.'
        }
      ]
    },
    {
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'text',
      description: 'The quote to display at the bottom of this section',
    },
    {
      name: 'testimonialAuthor',
      title: 'Testimonial Author',
      type: 'string',
      description: 'The author and location (e.g. JOHN, BUSSELTON)',
    }
  ],
}
