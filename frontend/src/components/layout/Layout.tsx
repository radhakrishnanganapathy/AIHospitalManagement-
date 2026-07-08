import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>

      <Sidebar />

      <div className="ml-64 bg-gray-100 min-h-screen">

        <Navbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}