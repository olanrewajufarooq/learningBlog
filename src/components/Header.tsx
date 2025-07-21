import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

// Texts
const texts = {
  headerTitle: 'Farooq.dev',
};

// Style Definitions
const styles = {
  header: clsx('bg-white dark:bg-gray-900 shadow-md'),
  headerContainer: clsx("container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between"),
  headerTitle: clsx("text-4xl font-bold text-primary"),
  nav: clsx("flex gap-8 mt-4 md:mt-0"),
  navLink: ({ isActive }: { isActive: boolean }) => clsx(
    'p-2 rounded-xl text-xl text-gray-700 dark:text-gray-200 font-medium border-b-2 border-transparent hover:border-gray-700 transition',
    { 'bg-primary text-white font-semibold hover:border-gray-700': isActive }
  ),
};

// Navigation Links
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/profile', label: 'Profile' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

// Header Component
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={ styles.headerTitle }>
          <Link to="/">{ texts.headerTitle }</Link>
        </h1>
        <nav className={ styles.nav }>
          { navLinks.map( link => (
            <NavLink
              key={ link.path }
              to={ link.path }
              className={styles.navLink }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
