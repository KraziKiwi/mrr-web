import React from 'react';
import { client, getPreviewClient } from '../sanity/client';
import { loadQuery, setServerClient } from '../sanity/loader';
import HomeClient from '../components/HomeClient';

// Always fetch fresh data during development/preview
export const revalidate = 0;

export default async function LandingPage() {
  // The preview token should only exist securely on the server/build environment when explicitly requested
  const previewToken = process.env.SANITY_API_READ_TOKEN;

  // We strictly determine if we are in preview mode based on the presence of the token
  const isPreview = Boolean(previewToken);

  const activeClient = isPreview ? getPreviewClient(previewToken) : client;

  setServerClient(activeClient);

  const initial = await loadQuery<any>(
    `{
      "heroData": *[_type == "hero"][0],
      "settings": *[_type == "settings"][0],
      "missionData": *[_type == "mission"][0],
      "projects": *[_type == "project"] | order(order asc),
      "teamMembers": *[_type == "teamMember"] | order(order asc),
      "services": *[_type == "service"] | order(order asc),
      "credentials": *[_type == "credential"] | order(order asc),
      "locations": *[_type == "location"] | order(order asc),
      "faqs": *[_type == "faq"] | order(order asc)
    }`
  );

  return (
    <HomeClient
      heroData={initial.data.heroData}
      settings={initial.data.settings}
      missionData={initial.data.missionData}
      projects={initial.data.projects}
      teamMembers={initial.data.teamMembers}
      services={initial.data.services}
      credentials={initial.data.credentials}
      locations={initial.data.locations}
      faqs={initial.data.faqs}
      isPreview={isPreview}
    />
  );
}
