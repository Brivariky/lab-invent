import Link from "next/link";
import { ReactNode } from "react";
import { LayoutDashboard, FlaskConical } from "lucide-react";
import "./globals.css";

export const metadata = {
  title: "Lab Inventory",
  description: "Inventory Management System for Labs",
};

const LABS = [
  "LAB FKI",
  "LAB LABORAN",
  "LAB SI",
  "LAB RPL",
  "LAB JARKOM",
  "LAB SIC",
];

function Sidebar() {
  return (
    <aside className="w-72 bg-gray-900 text-white p-6 min-h-screen flex flex-col shadow-lg">
      <div className="text-2xl font-bold tracking-wide mb-10 flex items-center gap-2">
        <span className="text-yellow-400">📦</span> <span>INVENTORY</span>
      </div>

      <nav className="flex flex-col gap-3 text-sm font-medium">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 hover:bg-gray-800 px-4 py-2 rounded-lg transition"
        >
          <LayoutDashboard className="w-4 h-4" />
          Dashboard
        </Link>
        {LABS.map((lab, index) => (
          <Link
            key={index}
            href={`/lab${index + 1}`}
            className="flex items-center gap-3 hover:bg-gray-800 px-4 py-2 rounded-lg transition"
          >
            <FlaskConical className="w-4 h-4" />
            {lab}
          </Link>
        ))}
      </nav>

      <div className="mt-auto text-xs text-gray-500 pt-10">
        ⛭ v1.0 — INACOS Labs
      </div>
    </aside>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 font-sans antialiased">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
