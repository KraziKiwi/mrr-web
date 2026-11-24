import { DocumentLocationResolver } from 'sanity/presentation'
import { map } from 'rxjs'

// This function helps Sanity determine which URL corresponds to which document
export const locate: DocumentLocationResolver = (params, context) => {
  if (params.type === 'hero' || params.type === 'mission' || params.type === 'settings' || params.type === 'teamMember' || params.type === 'project') {
    return {
      locations: [
        {
          title: 'Home',
          href: '/',
        },
      ],
    }
  }

  return null
}
