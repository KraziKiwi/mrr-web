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
      description: 'Photo of the team on site or similar',
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
          title: '24/7 Response',
          description: "Whenever you break down, we're ready to dispatch a truck to your location immediately."
        },
        {
          _type: 'object',
          title: 'Full Workshop',
          description: 'Our Kaikoura facility is equipped with 3 hoists and a four-poster for comprehensive mechanical repairs.'
        },
        {
          _type: 'object',
          title: 'Heavy & Classic',
          description: 'From dozers and excavators to delicate classic car transportation, we have the specialized gear for the job.'
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
      description: 'The author and location (e.g. JOHN, KAIKOURA)',
    }
  ],
}
