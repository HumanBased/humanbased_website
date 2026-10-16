import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM_PHOTOS } from '../../config/site';

// Home "The people". Names, roles and photos are the ones the About page shows
// (components/TeamBlock.tsx); the intro line is the About page's closing line.
// No biographies: the repo has none, and none are invented here.
const FOUNDERS = [
  { key: 'luis', name: 'Luis Pereira', role: 'Co-founder' },
  { key: 'alexina', name: 'Alexina Lesur', role: 'Co-founder' },
] as const;

const initials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

const People: React.FC = () => (
  <section id="people" className="ed-sec--tight" aria-labelledby="people-heading">
    <div className="ed-wide text-center" data-reveal="">
      <div className="hh-head" style={{ marginBottom: 0 }}>
        <h2 id="people-heading" className="font-serif ed-title">
          The people
        </h2>
        <p className="ed-lead">
          We exist to put technology in service of humanity, bridging organizational goals,
          social impact, and personal development with systems that actually work for people.
        </p>
      </div>

      <ul className="hh-people">
        {FOUNDERS.map((person) => (
          <li key={person.key} className="hh-person">
            {TEAM_PHOTOS[person.key] ? (
              <img
                src={`/images/team/${person.key}.webp`}
                alt={`${person.name}, ${person.role}`}
                width={360}
                height={360}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="hh-person-initials" aria-hidden="true">
                {initials(person.name)}
              </span>
            )}
            <div>
              <p className="hh-person-name">{person.name}</p>
              <p className="hh-person-role">{person.role}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8">
        <Link to="/about" className="hh-link">
          More about us <span aria-hidden="true">→</span>
        </Link>
      </p>
    </div>
  </section>
);

export default People;
