import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/components/Seo';
import { PageHero, SectionIntro, ClosingCTA } from '@/components/Site';
import exterior from '@/assets/cabins-exterior.webp';
import groundFloor from '@/assets/ground-floor-bedroom.webp';
import mountains from '@/assets/mountain-landscape.webp';
import balcony from '@/assets/balcony-view.webp';
import valley from '@/assets/valley-view.webp';
import balconyMorning from '@/assets/balcony-morning.webp';
import mist from '@/assets/misty-mountains.webp';
import sunrise from '@/assets/himalayan-sunrise.webp';
import attic from '@/assets/attic-bedroom.webp';
export const Route = createFileRoute('/gallery')({ head: () => pageHead('Photo Gallery | Dreams Villa A-Frame Cabin Near Jibhi', 'Explore real photos of Dreams Villa A-Frame Cabin: the wooden cabin, bedrooms, private balcony, Himalayan sunrises and mountain views near Jibhi.', '/gallery'), component: Gallery });
type Category = 'All' | 'Cabin' | 'Interiors' | 'Balcony' | 'Mountain Views' | 'Surroundings' | 'Experiences' | 'Dining';
function photoAt(index: number) {
  switch ((index + 9) % 9) {
    case 0: return {src: exterior, caption: 'The A-frame cabins in Bahu'};
    case 1: return {src: groundFloor, caption: 'The warm wooden lower-floor bedroom'};
    case 2: return {src: mountains, caption: 'The mountains around Bahu'};
    case 3: return {src: balcony, caption: 'View from the private balcony'};
    case 4: return {src: valley, caption: 'A quiet Himalayan valley'};
    case 5: return {src: balconyMorning, caption: 'Morning on the balcony'};
    case 6: return {src: mist, caption: 'Mountain weather rolling through'};
    case 7: return {src: sunrise, caption: 'Sunrise over the Himalayas'};
    default: return {src: attic, caption: 'The attic-style upper bedroom'};
  }
}
function Gallery() {
  const [category, setCategory] = useState<Category>('All');
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => { if (selected === null) return; const keydown = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); if (e.key === 'ArrowRight') setSelected(i => i === null ? null : (i + 1) % 9); if (e.key === 'ArrowLeft') setSelected(i => i === null ? null : (i + 8) % 9); }; window.addEventListener('keydown',keydown); document.body.style.overflow='hidden'; return () => { window.removeEventListener('keydown',keydown); document.body.style.overflow=''; }; }, [selected]);
  const show = (...categories: Category[]) => category === 'All' || categories.includes(category);
  const categories: Category[] = ['All','Cabin','Interiors','Balcony','Mountain Views','Surroundings','Dining','Experiences'];
  return <main><PageHero image={exterior} eyebrow="GALLERY / DREAMS VILLA" title="A Place to Remember" subtitle="The cabin, the light, the landscape. Every image is a real moment from Dreams Villa."/><section className="section container-site"><SectionIntro eyebrow="THE PLACE IN PICTURES" title="Take a closer look."/><div className="gallery-tabs" role="group" aria-label="Filter gallery">{categories.map(label => <Button key={label} variant="ghost" className={category === label ? 'selected' : ''} onClick={() => setCategory(label)} aria-pressed={category === label}>{label.toUpperCase()}</Button>)}</div>{category === 'Dining' ? <p className="intro-copy mb-12">No dining photographs have been supplied yet. Fresh home-style meals and complimentary breakfast are available during your stay.</p> : <div className="gallery-grid">
{show('Cabin','Surroundings') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(0)}><img src={exterior} alt="Real exterior of Dreams Villa A-frame cabins in Bahu" loading="lazy"/><span>CABIN / DREAMS VILLA</span></Button>}
{show('Interiors','Cabin') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(1)}><img src={groundFloor} alt="Lower floor bedroom and wooden interior" loading="lazy"/><span>INTERIORS / LOWER FLOOR</span></Button>}
{show('Mountain Views','Surroundings') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(2)}><img src={mountains} alt="Himalayan landscape with green hills near the cabin" loading="lazy"/><span>MOUNTAIN VIEWS / BAHU</span></Button>}
{show('Balcony','Mountain Views') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(3)}><img src={balcony} alt="View of the mountains from the private balcony" loading="lazy"/><span>BALCONY / MOUNTAIN VIEW</span></Button>}
{show('Mountain Views','Surroundings') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(4)}><img src={valley} alt="Wide mountain valley and clouds near Bahu" loading="lazy"/><span>SURROUNDINGS / THE VALLEY</span></Button>}
{show('Balcony','Experiences') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(5)}><img src={balconyMorning} alt="Morning mountain view from the cabin balcony" loading="lazy"/><span>BALCONY / MORNING</span></Button>}
{show('Mountain Views','Surroundings','Experiences') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(6)}><img src={mist} alt="Misty Himalayan mountains near Dreams Villa" loading="lazy"/><span>SURROUNDINGS / MIST</span></Button>}
{show('Mountain Views','Experiences') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(7)}><img src={sunrise} alt="Pink sunrise on Himalayan mountain peaks" loading="lazy"/><span>EXPERIENCES / SUNRISE</span></Button>}
{show('Interiors','Cabin') && <Button variant="ghost" className="gallery-item" onClick={() => setSelected(8)}><img src={attic} alt="Attic-style upper floor bedroom in the A-frame" loading="lazy"/><span>INTERIORS / ATTIC</span></Button>}
</div>}</section>{selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo gallery" onClick={() => setSelected(null)}><Button variant="ghost" size="icon" className="close" aria-label="Close photo" onClick={() => setSelected(null)}><X/></Button><Button variant="ghost" size="icon" className="previous" aria-label="Previous photo" onClick={e => {e.stopPropagation();setSelected((selected+8)%9)}}><ArrowLeft/></Button><img src={photoAt(selected).src} alt={photoAt(selected).caption} onClick={e => e.stopPropagation()}/><Button variant="ghost" size="icon" className="next" aria-label="Next photo" onClick={e => {e.stopPropagation();setSelected((selected+1)%9)}}><ArrowRight/></Button><p>{photoAt(selected).caption} · {selected+1} / 9</p></div>}<ClosingCTA/></main>
}
