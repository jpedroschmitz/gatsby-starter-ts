import React from 'react';
import { PageProps } from 'gatsby';

import Title from '@/components/Title';

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />
    <p>
      This is a nice TypeScript starter for Gatsby, great for advanced users!
    </p>
  </main>
);

export default Home;
