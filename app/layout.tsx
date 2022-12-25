import '../styles/globals.css'
import Header from './Header';
import Logo from './Logo';
import Providers from './providers';

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head></head>
      <body>
      <Header/>
      <Logo/>
      <div className='flex justify-center'>
       <Providers>{children}</Providers> 
      </div>
        </body>
    </html>
  );
}
export default RootLayout;