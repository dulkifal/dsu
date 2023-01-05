import {Navbar} from './navbar';
export  const Layout = ( 
  { children }
  : { children: React.ReactNode }
) => {
  return (
    <div>

      <Navbar />
      {children}
    </div>
  );
};