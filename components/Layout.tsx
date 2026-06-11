import { Navbar } from "./Navbar";
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