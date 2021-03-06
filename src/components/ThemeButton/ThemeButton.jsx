import { useState } from 'react';
import style from './themebutton.module.css';

function ThemeButton({ scale }) {
  let [theme, setTheme] = useState('dark');
  const rootElement = document.getElementById('root');
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      rootElement.classList.add('dark');
      rootElement.classList.remove('light');
    } else {
      setTheme('light');
      rootElement.classList.add('light');
      rootElement.classList.remove('dark');
    }
  };

  return (
    <div
      onClick={() => changeTheme()}
      className={`${style[theme]} ${style.themeButton} ${style.active}`}>
      <div
        style={{ height: `${45 * scale}px`, width: `${45 * scale}px` }}
        className={`${style[theme]} ${style.sun}`}>
        <svg
          className={`${style[theme]} ${style.sun}`}
          viewBox='0 0 153.97 153.97'>
          <rect x='23.08' y='23.08' width='108.03' height='108.03' />

          <rect
            x='23.08'
            y='23.08'
            transform='matrix(0.7071 -0.7071 0.7071 0.7071 -31.9328 77.0926)'
            width='108.03'
            height='108.03'
          />

          <rect
            x='23.08'
            y='23.08'
            transform='matrix(0.9239 -0.3827 0.3827 0.9239 -23.6337 35.3704)'
            width='108.03'
            height='108.03'
          />

          <rect
            x='23.08'
            y='23.08'
            transform='matrix(0.3827 -0.9239 0.9239 0.3827 -23.6337 118.8148)'
            width='108.03'
            height='108.03'
          />
          <circle className={style.circle} cx='76.99' cy='76.99' r='41.85' />
        </svg>
      </div>
      <div
        style={{ height: `${45 * scale}px`, width: `${45 * scale}px` }}
        className={`${style[theme]} ${style.blackhole}`}>
        <svg
          className={`${style[theme]} ${style.blackhole}`}
          viewBox='0 0 144.69 145.06'>
          <path d='M49.54,49.6c.29.26.56.55.84.81C50.92,51,51.51,51.46,52,52L53.6,53.8c.55.55,1,1.26,1.47,1.87l0,0a24.06,24.06,0,0,1,12.76-6.91A26.67,26.67,0,0,0,66,46.53a56.11,56.11,0,0,0-4.51-4.48,44,44,0,0,0-10.91-6.94,36.69,36.69,0,0,0-12.56-3,39.67,39.67,0,0,0-12.37,1.26,45.71,45.71,0,0,0-11,4.55A44.12,44.12,0,0,0,9.8,41.13a34,34,0,0,0-4.32,3.8l.22.32a71.42,71.42,0,0,1,10.63-2.88,56.83,56.83,0,0,1,10.41-1.06A33.94,33.94,0,0,1,45,46.18a36.07,36.07,0,0,1,3.7,2.7Z' />
          <path d='M42.15,61.12c.37.11.73.27,1.1.4.72.29,1.45.49,2.17.81l2.15,1a23.5,23.5,0,0,1,2.1,1.11h0a24.21,24.21,0,0,1,8.85-11.51,29.06,29.06,0,0,0-2.63-1.28A52.31,52.31,0,0,0,50,49.37a43.63,43.63,0,0,0-12.79-1.9,36.54,36.54,0,0,0-12.7,2.37A39.61,39.61,0,0,0,13.7,56a46,46,0,0,0-8.19,8.63,43.48,43.48,0,0,0-3.11,4.9A33.83,33.83,0,0,0,0,74.77l.33.2a70.78,70.78,0,0,1,8.54-7A57.33,57.33,0,0,1,18,62.81a34,34,0,0,1,18.62-3,36.47,36.47,0,0,1,4.48,1Z' />
          <path d='M40.09,74.64c.38,0,.77,0,1.16-.08.78,0,1.53-.14,2.31-.14h2.36c.77,0,1.59.12,2.37.16h0a24.14,24.14,0,0,1,3.4-14.11,25.92,25.92,0,0,0-2.93-.1,54.24,54.24,0,0,0-6.34.35A43.5,43.5,0,0,0,30,64.2a36.51,36.51,0,0,0-10.63,7.32,39.41,39.41,0,0,0-7.34,10,45.21,45.21,0,0,0-4,11.21,43.62,43.62,0,0,0-.86,5.75,34.49,34.49,0,0,0-.06,5.75l.39,0a70.07,70.07,0,0,1,5-9.83A58.31,58.31,0,0,1,18.66,86,34,34,0,0,1,34.47,75.76,36,36,0,0,1,39,74.82Z' />
          <path d='M43.7,87.84c.33-.2.68-.37,1-.55.71-.34,1.35-.75,2.06-1.08l2.16-.94a22.89,22.89,0,0,1,2.24-.82h0a24.09,24.09,0,0,1-2.63-14.27,27.54,27.54,0,0,0-2.72,1.09,55.79,55.79,0,0,0-5.65,2.9,43.92,43.92,0,0,0-10,8.24,36.8,36.8,0,0,0-6.73,11,39.63,39.63,0,0,0-2.62,12.15,45.27,45.27,0,0,0,.93,11.85,44.16,44.16,0,0,0,1.56,5.6,33.78,33.78,0,0,0,2.28,5.28l.37-.11a71.14,71.14,0,0,1,.54-11A57.46,57.46,0,0,1,28.76,107,34,34,0,0,1,39,91.14a35.35,35.35,0,0,1,3.71-2.68Z' />
          <path d='M52.36,98.42c.22-.31.48-.61.72-.91.5-.6.92-1.24,1.44-1.82L56.11,94c.49-.6,1.15-1.1,1.71-1.66l0,0a24,24,0,0,1-8.21-12,24,24,0,0,0-2,2.11,53.37,53.37,0,0,0-4,4.94,44.08,44.08,0,0,0-5.77,11.59,36.58,36.58,0,0,0-1.66,12.8,39.22,39.22,0,0,0,2.54,12.16,45.34,45.34,0,0,0,5.67,10.45,43.37,43.37,0,0,0,3.7,4.48,33.89,33.89,0,0,0,4.23,3.9l.3-.25a70.12,70.12,0,0,1-4-10.27A56.9,56.9,0,0,1,46.5,122a34,34,0,0,1,2.94-18.62,36.41,36.41,0,0,1,2.3-4Z' />
          <path d='M64.59,104.57c.07-.38.19-.76.28-1.13.22-.75.34-1.5.58-2.25L66.19,99c.2-.74.6-1.47.88-2.21v0a24.1,24.1,0,0,1-12.36-7.59,25,25,0,0,0-1,2.75A56.5,56.5,0,0,0,52.08,98a44,44,0,0,0-.55,12.92,36.82,36.82,0,0,0,3.68,12.38,39.68,39.68,0,0,0,7.28,10.08,46.18,46.18,0,0,0,9.43,7.24,43.34,43.34,0,0,0,5.2,2.58,33,33,0,0,0,5.45,1.84l.17-.35A69.85,69.85,0,0,1,74.93,137a57.06,57.06,0,0,1-6.13-8.49,34,34,0,0,1-4.88-18.21,36.56,36.56,0,0,1,.48-4.55Z' />
          <path d='M78.25,105.21c-.09-.37-.13-.77-.2-1.15-.11-.77-.3-1.51-.39-2.29l-.23-2.34c-.12-.77,0-1.59-.09-2.38v0A24.2,24.2,0,0,1,63,95.12a28.84,28.84,0,0,0,.2,2.92,54.21,54.21,0,0,0,1,6.27,43.31,43.31,0,0,0,4.75,12,36.44,36.44,0,0,0,8.4,9.81,39.54,39.54,0,0,0,10.74,6.25,45.84,45.84,0,0,0,11.56,2.78,45.26,45.26,0,0,0,5.81.25,34.3,34.3,0,0,0,5.72-.54v-.39a71.75,71.75,0,0,1-10.29-3.91,57.19,57.19,0,0,1-9.05-5.27A34,34,0,0,1,80,110.67a38.71,38.71,0,0,1-1.41-4.35Z' />
          <path d='M91,100.24c-.24-.31-.44-.65-.65-1-.41-.66-.89-1.25-1.29-1.93l-1.16-2a23.6,23.6,0,0,1-1.05-2.14v0a24.11,24.11,0,0,1-13.92,4.11,25.74,25.74,0,0,0,1.37,2.59,54.43,54.43,0,0,0,3.47,5.32A44.12,44.12,0,0,0,87,114.21a36.87,36.87,0,0,0,11.66,5.54A39.66,39.66,0,0,0,111,121.09a45.78,45.78,0,0,0,11.69-2.17,44.21,44.21,0,0,0,5.4-2.13,33.71,33.71,0,0,0,5-2.82l-.15-.36a70.71,70.71,0,0,1-11,.61,56.73,56.73,0,0,1-10.41-1.13,33.94,33.94,0,0,1-16.8-8.55,38.15,38.15,0,0,1-3.06-3.41Z' />
          <path d='M100.62,90.51c-.34-.18-.66-.41-1-.62-.64-.43-1.32-.78-2-1.24l-1.89-1.4A23.77,23.77,0,0,1,94,85.73l0,0a24.1,24.1,0,0,1-11.05,9.42,27.4,27.4,0,0,0,2.31,1.8,52.41,52.41,0,0,0,5.34,3.45,43.57,43.57,0,0,0,12.12,4.52,36.61,36.61,0,0,0,12.9.32,39.77,39.77,0,0,0,11.84-3.8,46,46,0,0,0,9.8-6.73,45.52,45.52,0,0,0,4.07-4.15,34.33,34.33,0,0,0,3.43-4.62l-.28-.27a69.36,69.36,0,0,1-9.8,5,56.29,56.29,0,0,1-10,3.2,32.16,32.16,0,0,1-23-2.85Z' />
          <path d='M105.45,77.71c-.38,0-.77-.11-1.15-.16-.77-.14-1.53-.18-2.3-.34l-2.3-.5c-.76-.13-1.53-.45-2.29-.65h0a24.13,24.13,0,0,1-6.26,13.09,24.08,24.08,0,0,0,2.84.72,54.18,54.18,0,0,0,6.27,1,43.6,43.6,0,0,0,12.92-.8,36.57,36.57,0,0,0,11.92-5,39.2,39.2,0,0,0,9.26-8.28,45.94,45.94,0,0,0,8.25-15.58,32.82,32.82,0,0,0,1.25-5.62l-.36-.12a71.52,71.52,0,0,1-6.9,8.58,57,57,0,0,1-7.81,7,33.88,33.88,0,0,1-17.6,6.76,35,35,0,0,1-4.58,0Z' />
          <path d='M104.66,64.06c-.36.12-.75.21-1.12.32-.75.18-1.47.45-2.23.62L99,65.48c-.75.19-1.58.21-2.36.33h0a24.16,24.16,0,0,1-.39,14.51,29,29,0,0,0,2.88-.51,56.18,56.18,0,0,0,6.13-1.66,43.76,43.76,0,0,0,11.47-6,36.58,36.58,0,0,0,8.88-9.37,39.8,39.8,0,0,0,5.09-11.34,45.58,45.58,0,0,0,1.55-11.79,43,43,0,0,0-.36-5.8,32.76,32.76,0,0,0-1.13-5.64l-.39,0a71,71,0,0,1-2.81,10.64,57.52,57.52,0,0,1-4.29,9.55,34,34,0,0,1-13.33,13.33,37.33,37.33,0,0,1-4.19,1.86Z' />
          <path d='M98.39,51.9c-.28.26-.6.5-.9.75-.61.48-1.15,1-1.79,1.48L93.79,55.5a23.86,23.86,0,0,1-2,1.27h0A24.17,24.17,0,0,1,97.3,70.19a28.63,28.63,0,0,0,2.43-1.63,54.56,54.56,0,0,0,4.92-4,43.37,43.37,0,0,0,8-10.14A36.53,36.53,0,0,0,117,42.24a39.57,39.57,0,0,0,0-12.43A45.73,45.73,0,0,0,111,13.26a34.31,34.31,0,0,0-3.33-4.69l-.34.19a70.89,70.89,0,0,1,1.75,10.86,56.27,56.27,0,0,1,0,10.47,34,34,0,0,1-6.75,17.61,37.86,37.86,0,0,1-3.07,3.39Z' />
          <path d='M87.71,43.35c-.15.35-.35.7-.51,1-.37.69-.65,1.4-1,2.08l-1.19,2c-.35.68-.89,1.31-1.32,2l0,0a24.1,24.1,0,0,1,10.52,10A26,26,0,0,0,95.71,58a54.73,54.73,0,0,0,2.87-5.67,43.48,43.48,0,0,0,3.22-12.52,36.52,36.52,0,0,0-1-12.87,39.37,39.37,0,0,0-5-11.37,46,46,0,0,0-7.72-9,44.87,44.87,0,0,0-4.56-3.61A33.28,33.28,0,0,0,78.54,0L78.3.31a71,71,0,0,1,6,9.21,57.06,57.06,0,0,1,4.22,9.58,34,34,0,0,1,1,18.83,35.62,35.62,0,0,1-1.42,4.35Z' />
          <path d='M74.48,39.88c0,.38,0,.78,0,1.16-.05.78,0,1.54-.09,2.32l-.27,2.34c0,.78-.28,1.57-.4,2.35v0a24.11,24.11,0,0,1,13.68,4.86,27.35,27.35,0,0,0,.41-2.9,55.5,55.5,0,0,0,.32-6.34,43.94,43.94,0,0,0-2.15-12.76,36.74,36.74,0,0,0-6.18-11.34,39.66,39.66,0,0,0-9.2-8.35A46,46,0,0,0,59.81,6.12a45.19,45.19,0,0,0-5.63-1.45A33.42,33.42,0,0,0,48.46,4l-.09.38a70.83,70.83,0,0,1,9.26,6,57.66,57.66,0,0,1,7.75,7A34,34,0,0,1,74,34.18a36.51,36.51,0,0,1,.47,4.56Z' />
          <path d='M61,42.09c.16.35.28.72.43,1.08.26.73.61,1.42.85,2.16L63,47.57c.27.73.37,1.55.58,2.31v0A24.17,24.17,0,0,1,78,48.78,27.16,27.16,0,0,0,77.23,46,55.57,55.57,0,0,0,74.94,40a44,44,0,0,0-7.15-10.78,36.76,36.76,0,0,0-10.26-7.85,39.69,39.69,0,0,0-11.8-3.88,45.7,45.7,0,0,0-11.89-.31,43.94,43.94,0,0,0-5.73,1,33.23,33.23,0,0,0-5.49,1.71l.07.38A72.12,72.12,0,0,1,33.58,22a57.6,57.6,0,0,1,9.94,3.27A34,34,0,0,1,58.17,37.1a37.17,37.17,0,0,1,2.29,4Z' />
          <circle className={style.circle} cx='72' cy='72' r='25' />
        </svg>
      </div>
      <div
        style={{ height: `${45 * scale}px`, width: `${45 * scale}px` }}
        className={`${style[theme]} ${style.stars}`}>
        <svg viewBox='0 0 180 190'>
          <g>
            <circle cx='125' cy='4.94' r='4.94' />
            <circle cx='163.73' cy='49.74' r='7.55' />
            <circle cx='56.26' cy='173.88' r='7.55' />
            <circle cx='173' cy='109.6' r='2.68' />
            <circle cx='132.94' cy='164' r='4.86' />
            <circle cx='26.02' cy='149.57' r='2.02' />
            <circle cx='5.91' cy='76.96' r='5.91' />
            <circle cx='38.06' cy='24.12' r='2.85' />
            <circle cx='73.27' cy='12.08' r='4.94' />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default ThemeButton;
