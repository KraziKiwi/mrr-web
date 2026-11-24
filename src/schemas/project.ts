export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Location',
      type: 'string',
      description: 'e.g., [DUNSBOROUGH]',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., Residential, Commercial, Renovation',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'year',
      title: 'Project Year',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'beforeImage',
      title: 'Before Photo (Optional)',
      type: 'image',
      description: 'Used for the interactive slider on the live site',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'afterImage',
      title: 'After Photo (Optional)',
      type: 'image',
      description: 'Used for the interactive slider on the live site',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sort projects on the site',
    },
  ],
}
