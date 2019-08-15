import React, { PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';

class Layout extends PureComponent {
  render() {
   const { header: Header, footer: Footer, children } = this.props;

   return (
     <div>
        { Header && <header className="header">
          <SectionTitle className="header__title section-title">Header</SectionTitle>
          <Header />
        </header>
        }
        <main className={`main ${Header && 'main--with-header'} ${Footer && 'main--with-footer' }`}>
          <SectionTitle className="main__title">Main</SectionTitle>
            {children}
          </main>
        { Footer && <footer className="footer">
            <SectionTitle className="header__title section-title">Footer</SectionTitle>
          <Footer />
        </footer>
        }
     </div>


   );
  }
}

export default Layout;




