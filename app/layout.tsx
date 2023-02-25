import './global.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ru'>
            <head />
            <body>{children}</body>
        </html>
    );
}
