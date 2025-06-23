import { Kaushan_Script, Playfair_Display, Poppins } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'], // or ['400', '700'] for multiple weights
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // or ['400', '700'] for multiple weights
});

export const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: ['400'], // or ['400', '700'] for multiple weights
  display: 'swap',
});
