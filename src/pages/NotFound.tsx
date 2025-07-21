import { Link } from 'react-router-dom';
import clsx from 'clsx';

const texts = {
  code: '404',
  message: 'Oops! Page not found.',
  subtext: "The page you're looking for doesn't exist or has been moved.",
  linkText: 'Return to Home',
};

const styles = {
  container: clsx( 'min-h-[60vh] flex flex-col items-center justify-center text-center px-4' ),
  code: clsx( 'text-9xl font-bold text-primary' ),
  message: clsx( 'text-2xl md:text-3xl mt-4 text-gray-700 dark:text-gray-200' ),
  subtext: clsx( 'text-lg mt-2 text-gray-500 dark:text-gray-400' ),
  link: clsx( 'mt-6 inline-block bg-primary text-white px-8 py-2 rounded-xl border-2 border-transparent hover:bg-gray-50 hover:text-primary hover:border-primary transition' ),
};

function NotFound() {
  return (
    <section className={ styles.container }>
      <div className={ styles.code }>{ texts.code }</div>
      <div className={ styles.message }>{ texts.message }</div>
      <div className={ styles.subtext }>{ texts.subtext }</div>
      <Link to="/" className={ styles.link }>
        { texts.linkText }
      </Link>
    </section>
  );
}

export default NotFound;
