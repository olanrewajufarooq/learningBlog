import type { SectionProps } from '@customtypes/props';
import { sectionStyle } from '@styles/pages';

function ContactSection( { title, subtitle, children }: SectionProps ) {
  // Component.
  return (
    <section className={ sectionStyle.section }>
      { title && <h2 className={ sectionStyle.title }>{ title }</h2> }
      { subtitle && <h3 className={ sectionStyle.subtitle }>{ subtitle }</h3> }

      { children }

    </section>
  );
}

export default ContactSection;