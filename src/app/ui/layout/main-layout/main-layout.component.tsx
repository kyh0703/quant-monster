import { ReactNode } from 'react';

import Header from '@/app/ui/layout/header/header.component';
import Navigation from '@/app/ui/layout/navigation/navigation.component';
import Footer from '@/app/ui/layout/footer/footer.component';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
