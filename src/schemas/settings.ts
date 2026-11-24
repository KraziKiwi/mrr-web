export default {
  name: 'settings',
  title: 'Brand Settings',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactEmail',
      title: 'Form Submission Email',
      type: 'string',
      description: 'The email address where leads should be sent (e.g., Hello@fpprojects.au)',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'abn',
      title: 'ABN',
      type: 'string',
    },
    {
      name: 'waReg',
      title: 'WA Reg. Builder Number',
      type: 'string',
    },
    {
      name: 'teamImage',
      title: 'Team Group Photo',
      type: 'image',
      description: 'A single cinematic shot of the directors together',
      options: { hotspot: true }
    },
    {
      name: 'servicesHeading',
      title: 'Services Section Heading',
      type: 'string',
      description: 'e.g., What We Do',
    },
    {
      name: 'portfolioSubheading',
      title: 'Portfolio Subheading',
      type: 'string',
      description: 'e.g., Selected Works',
    },
    {
      name: 'portfolioHeading',
      title: 'Portfolio Heading',
      type: 'string',
      description: 'e.g., Our Portfolio',
    },
    {
      name: 'beforeAfterSubheading',
      title: 'Before/After Subheading',
      type: 'string',
      description: 'e.g., Before / After',
    },
    {
      name: 'beforeAfterHeading',
      title: 'Before/After Heading',
      type: 'string',
      description: 'e.g., See The Difference',
    },
    {
      name: 'beforeAfterDescription',
      title: 'Before/After Description',
      type: 'string',
      description: 'e.g., Drag across the image to see the real transformation.',
    },
    {
      name: 'beforeAfterGallery',
      title: 'Before & After Gallery',
      type: 'array',
      description: 'Add your before and after image pairs here.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title (e.g. Kitchen Renovation)', type: 'string' },
            { name: 'beforeImage', title: 'Before Image', type: 'image', options: { hotspot: true } },
            { name: 'afterImage', title: 'After Image', type: 'image', options: { hotspot: true } },
          ]
        }
      ]
    },
    {
      name: 'teamSubheading',
      title: 'Team Subheading',
      type: 'string',
      description: 'e.g., Our Experts',
    },
    {
      name: 'teamHeading',
      title: 'Team Heading',
      type: 'string',
      description: 'e.g., Meet The Team',
    },
    {
      name: 'credentialsHeading',
      title: 'Credentials Heading',
      type: 'string',
      description: 'e.g., Licensed, Insured, Accountable',
    },
    {
      name: 'locationsSubheading',
      title: 'Locations Subheading',
      type: 'string',
      description: 'e.g., Where We Build',
    },
    {
      name: 'locationsHeading',
      title: 'Locations Heading',
      type: 'string',
      description: 'e.g., Perth & The South West',
    },
    {
      name: 'faqSubheading',
      title: 'FAQ Subheading',
      type: 'string',
      description: 'e.g., Questions',
    },
    {
      name: 'faqHeading',
      title: 'FAQ Heading',
      type: 'string',
      description: 'e.g., Common Questions',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (e.g. Instagram)', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
}
