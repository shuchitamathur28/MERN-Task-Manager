import ReduxProvider from "../redux/Provider";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "@/../redux";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Task Manager</title>
      </head>
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}