import { SITE_URL, LINKEDIN_URL, INSTAGRAM_URL, MINDFIRE_URL } from '@/lib/site';
import { PROFILE, FAQS } from '@/lib/profile';

export const dynamic = 'force-static';

// Plain-text profile for AI assistants and answer engines (llmstxt.org convention).
export function GET() {
  const body = `# ${PROFILE.name}

> ${PROFILE.summary}

## Key facts

- Full name: ${PROFILE.name}
- Also known as: ${PROFILE.alternateNames.join(', ')}
- Role: ${PROFILE.role} (${PROFILE.roleShort}), ${PROFILE.company}
- Company website: ${MINDFIRE_URL}
- Flagship estate: ${PROFILE.flagship} (${PROFILE.city}, ${PROFILE.country})
- Background: ${PROFILE.background}
- What Mindfire does: ${PROFILE.services.join(', ')}
- Mindfire is known for: ${PROFILE.promises.join('; ')}
- Roles he plays: ${PROFILE.hats.join(', ')}
- Outside work: ${PROFILE.interests.join(', ')}
- Mission: ${PROFILE.mission}
- Official website: ${SITE_URL}
- LinkedIn: ${LINKEDIN_URL}
- Instagram: ${INSTAGRAM_URL}

## Story

${PROFILE.name} studied Geology. While others saw just land, he saw formation, structure and potential — how the earth holds value over time, why location is never accidental, and how what lies beneath determines what can stand above. Moving into real estate was a natural evolution: from studying land to unlocking its value. Entrepreneurship followed, and with it ${PROFILE.company}.

${PROFILE.mindfireDescription}

${PROFILE.skylandsDescription}

## Frequently asked questions

${FAQS.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Pages

- [Home](${SITE_URL}/): Overview and key facts
- [About](${SITE_URL}/about): Full story — from geology to real estate, values, and FAQ
- [Portfolio](${SITE_URL}/portfolio): Mindfire Homes and Investments, Skylands, and how estates are developed
- [Vision](${SITE_URL}/vision): Mission, guiding principles, and decision framework
- [Leadership](${SITE_URL}/leadership): Leadership approach and values
- [Contact](${SITE_URL}/contact): Investment, partnership and media enquiries
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
