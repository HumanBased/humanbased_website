import React from 'react';
import { TEAM_PHOTOS } from '../config/site';

interface Person {
  key: 'luis' | 'alexina';
  name: string;
  role: string;
}

const PEOPLE: Person[] = [
  { key: 'luis', name: 'Luis Pereira', role: 'Co-founder' },
  { key: 'alexina', name: 'Alexina Lesur', role: 'Co-founder' },
];

const initials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

// Names and roles only. A photo is shown only if /images/team/<key>.webp existed
// at build time (made by scripts/team-photos.mjs from a png/jpg/webp source); otherwise an initials badge keeps the layout.
const TeamBlock: React.FC = () => (
  <section className="pb-4" aria-labelledby="team-heading">
    <div className="ed-wide text-center space-y-10" data-reveal="">
      <h2 id="team-heading" className="hb-heading">
        Who is behind HumanBased
      </h2>

      <ul className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
        {PEOPLE.map((person) => (
          <li key={person.key} className="flex flex-col items-center gap-3">
            {TEAM_PHOTOS[person.key] ? (
              <img
                src={`/images/team/${person.key}.webp`}
                alt={`${person.name}, ${person.role}`}
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                className="h-[120px] w-[120px] rounded-full object-cover border border-white/10"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-white/10 bg-white/5 font-serif text-3xl text-amber-400"
              >
                {initials(person.name)}
              </span>
            )}
            <div>
              <p className="font-serif text-xl text-white/90">{person.name}</p>
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-amber-400">{person.role}</p>
            </div>
          </li>
        ))}
      </ul>

    </div>
  </section>
);

export default TeamBlock;
