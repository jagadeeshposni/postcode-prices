// import SideNav from '@/app/ui/dashboard/sidenav';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto antialiased `}>
          {children}
      </body>
    </html>
  );
}