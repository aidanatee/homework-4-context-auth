import React, { PureComponent } from 'react';
import './Layout.css';

class Layout extends PureComponent {
  render() {
   const { header: Header, footer: Footer, children } = this.props;

   return (
     <div>
     <header class="header">
     <p class="header__title section-title">Header</p>
     <Header />
     </header>
     <main class="main main--with-header main--with-footer">
     {children}</main>
     <footer class="footer"><p class="header__title section-title">Footer</p>
     <Footer/>
     </footer>
     
     </div>


   );
  }
}

export default Layout;




