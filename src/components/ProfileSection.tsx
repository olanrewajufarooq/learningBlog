import clsx from 'clsx';
import { type ProfileSectionProps } from '@customtypes/profileTypes';


const styles = {
  section: clsx( 'mb-8' ),
  title: clsx( 'text-2xl text-secondary font-bold mb-4' ),
  buttonContainer: clsx( 'mt-4 flex gap-4 justify-center' ),
  button: clsx(
    'bg-primary text-white px-6 py-2 rounded-xl transition duration-300',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ),
};

function ProfileSection( { title, children }: ProfileSectionProps ) {
  // Component.
  return (
    <section className={ styles.section }>
      <h2 className={ styles.title }>{ title }</h2>

      { children }

    </section>
  );
}

export default ProfileSection;
