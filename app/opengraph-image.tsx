import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { PROFILE } from '@/lib/profile';

export const alt = `${PROFILE.name} (Leke) — ${PROFILE.roleShort}, ${PROFILE.company}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), 'public', 'founder.jpg'));
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#F8F3EA' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', width: 760 }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: 20, letterSpacing: 6, color: '#C8A96A', fontWeight: 700 }}>
            <div style={{ width: 48, height: 2, background: '#C8A96A', marginRight: 20 }} />
            FROM THE EARTH TO ESTATES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 84, lineHeight: 1, color: '#181818', marginTop: 32, letterSpacing: -1 }}>
            <span>OLORUNLEKE</span>
            <span>OJUOLAPE</span>
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: '#181818', marginTop: 36 }}>
            {`${PROFILE.roleShort}, ${PROFILE.company}`}
          </div>
          <div style={{ display: 'flex', fontSize: 22, color: '#6B665E', marginTop: 14 }}>
            {`Geologist · Real Estate Entrepreneur · ${PROFILE.city}, ${PROFILE.country}`}
          </div>
        </div>
        <div style={{ display: 'flex', width: 440, height: '100%', borderLeft: '6px solid #C8A96A' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} alt="" width={440} height={630} style={{ objectFit: 'cover' }} />
        </div>
      </div>
    ),
    size,
  );
}
