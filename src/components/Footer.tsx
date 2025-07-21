import clsx from 'clsx';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

// Footer component styles
const styles = {
  footer: clsx( 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 mt-auto' ),
  footerContainer: clsx( 'container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center' ),
  brandSection: clsx( 'flex flex-row items-center text-4xl gap-4' ),
  socialLinks: clsx( 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200' ),
  copyright: clsx( 'text-lg text-center mt-4 md:mt-0' ),
};

// Social Links

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/olanrewajufarooq' },
  { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/olanrewajufarooq' },
  { name: 'Facebook', icon: <FaFacebook />, link: 'https://facebook.com/olanrewajufarooq' },
];

// Social Links Component
const SocialLink = ({link, children}: {link: string, children: React.ReactNode}) => (
  <a href={ link } className={ styles.socialLinks } target="_blank" rel="noopener noreferrer">
    { children }
  </a>
);

// Footer component
function Footer() {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.footerContainer }>
        <div className={ styles.brandSection }>
          {socialLinks.map((social) => (
            <SocialLink key={social.name} link={social.link}>{social.icon}</SocialLink>
          ))}
        </div>
        <div className={ styles.copyright }>
          &copy; { new Date().getFullYear() } Farooq<br />All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
