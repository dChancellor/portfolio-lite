import style from './Footer.module.css';
import Socials from '../Socials/Socials';

function Footer() {
  return (
    <>
      <Socials />
      <p>Made by Derek Chancellor</p>
      <p>
        Code can be found{' '}
        <a
          rel='noreferrer noopener'
          target='_blank'
          href='https://github.com/dChancellor/portfolio-lite'>
          here
        </a>
      </p>
    </>
  );
}
export default Footer;
