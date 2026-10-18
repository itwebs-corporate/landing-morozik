import { SkipLink } from './skip-link';
import { SiteHeader } from './header';
import { Hero } from './hero';
import { Problems } from './problems';
import { Approach } from './approach';
import { Process } from './process';
import { Projects } from './projects';
import { Benefits } from './benefits';
import { Pricing } from './pricing';
import { Reputation } from './reputation';
import { Faq } from './faq';
import { FinalCta } from './final-cta';
import { SiteFooter } from './footer';
import { LeadDialog } from './lead-dialog';
import { MessageDialog } from './message-dialog';
import { ProjectDialog } from './project-dialog';
import { MenuDialog } from './menu-dialog';
import { SourcesDialog } from './sources-dialog';
import { DataDialog } from './data-dialog';
import { Toast } from './toast';
import schema from '../model/schema.json';
import { LandingInteractions } from '@/features/landing-interactions/ui/landing-interactions';

export function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <SkipLink />
      <SiteHeader />
      <main id="main">
      <Hero />
      <Problems />
      <Approach />
      <Process />
      <Projects />
      <Benefits />
      <Pricing />
      <Reputation />
      <Faq />
      <FinalCta />
      </main>
      <SiteFooter />
      <LeadDialog />
      <MessageDialog />
      <ProjectDialog />
      <MenuDialog />
      <SourcesDialog />
      <DataDialog />
      <Toast />
      <LandingInteractions />
    </>
  );
}
