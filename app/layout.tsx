import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

let info = {
    appId: process.env.Pusher_app_id!,
    key: process.env.Pusher_key!,
    secret: process.env.Pusher_secret!,
    cluster: process.env.Pusher_cluster!,
    useTLS: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}