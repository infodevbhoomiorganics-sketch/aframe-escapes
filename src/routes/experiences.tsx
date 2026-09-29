import { createFileRoute } from '@tanstack/react-router';
import { pageHead } from '@/components/Seo';
import { PageHero, SectionIntro, ClosingCTA } from '@/components/Site';
import sunrise from '@/assets/himalayan-sunrise.webp';
import valley from '@/assets/valley-view.webp';
import balcony from '@/assets/balcony-view.webp';
import mist from '@/assets/misty-mountains.webp';
import green from '@/assets/mountain-landscape.webp';
import exterior from '@/assets/cabins-exterior.webp';
export const Route = createFileRoute('/experiences')({ head: () => pageHead('Experiences Near Jibhi | Dreams Villa A-Frame Cabin', 'Enjoy Himalayan sunrises, panoramic mountain views, peaceful nature and local hospitality at Dreams Villa in Bahu, an offbeat base near Jibhi.', '/experiences'), component: Experiences });
const moments = [
  { image: sunrise, tag: '01 / MORNING LIGHT', title: 'Himalayan sunrises', copy: 'Relax on the balcony and watch the morning light find its way across the mountains.' },
  { image: valley, tag: '02 / THE LANDSCAPE', title: 'Mountain views', copy: 'Take in panoramic valley and Himalayan scenery, from first light to the last.' },
  { image: balcony, tag: '03 / SLOW DAYS', title: 'A peaceful retreat', copy: 'Find quiet time away from the noise of busier tourist areas.' },
  { image: mist, tag: '04 / OUTSIDE', title: 'Close to nature', copy: 'Explore the greenery and mountain environment surrounding the cabin.' },
  { image: green, tag: '05 / NEARBY', title: 'Jibhi exploration', copy: 'Use this peaceful Bahu retreat as a base for exploring the region near Jibhi.' },
  { image: exterior, tag: '06 / LOCAL LIFE', title: 'The local experience', copy: 'Experience a slower pace and the warmth of Himalayan hospitality.' },
];
function Experiences() { return <main><PageHero image={sunrise} eyebrow="EXPERIENCES / DREAMS VILLA" title="The Art of Doing Less" subtitle="Come for the mountains. Stay for the moments between them."/><section className="section container-site"><SectionIntro eyebrow="YOUR DAYS, YOUR WAY" title="Out here, the small moments stay with you."/><div className="editorial-grid">{moments.map(item => <div className="editorial-tile" key={item.title}><img src={item.image} alt={item.title + ' near Dreams Villa in Bahu'} loading="lazy"/><div className="tile-content"><p>{item.tag}</p><h3>{item.title}</h3><span className="text-sm opacity-90 block mt-2">{item.copy}</span></div></div>)}</div></section><ClosingCTA/></main> }
