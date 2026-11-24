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
      description: 'The email address where leads should be sent (e.g., hello@mrr.au)',
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
      name: 'tsl',
      title: 'Transport Service License (TSL) Number',
      type: 'string',
    },
    {
      name: 'teamImage',
      title: 'Team / Fleet Group Photo',
      type: 'image',
      description: 'A single cinematic shot of the trucks or team together',
      options: { hotspot: true }
    },
    {
      name: 'servicesHeading',
      title: 'Services Section Heading',
      type: 'string',
      description: 'e.g., What We Do',
    },
    {
      name: 'gallerySubheading',
      title: 'Gallery Subheading',
      type: 'string',
      description: 'e.g., Our Fleet & Jobs',
    },
    {
      name: 'galleryHeading',
      title: 'Gallery Heading',
      type: 'string',
      description: 'e.g., Recent Recoveries & Transport',
    },
    {
      name: 'galleryDescription',
      title: 'Gallery Description',
      type: 'string',
      description: 'e.g., A look at some of our recent work.',
    },
    {
      name: 'gallery',
      title: 'Standard Gallery',
      type: 'array',
      description: 'Add your gallery images here.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title (e.g. Classic Car Transport)', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
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
      description: 'e.g., Our areas of operation',
    },
    {
      name: 'locationsHeading',
      title: 'Locations Heading',
      type: 'string',
      description: 'e.g., South Island-wide',
    },
    {
      name: 'contactHeading',
      title: 'Contact Heading',
      type: 'string',
      description: 'e.g. Get In Touch',
    },
    {
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'text',
      description: 'e.g. Tell us a little about your project and we will call you...',
    },
    {
      name: 'contactSuccessTitle',
      title: 'Form Success Title',
      type: 'string',
      description: 'e.g. Thank You',
    },
    {
      name: 'contactSuccessMessage',
      title: 'Form Success Message',
      type: 'text',
      description: 'e.g. Your message has been received...',
    },
    {
      name: 'contactSteps',
      title: 'What Happens Next (Steps)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add the 3 steps that happen after someone fills out the form',
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
