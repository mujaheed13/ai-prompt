import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title : "AI Prompt",
    description: "Discover & Share AI Promots" 
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className="gradient">

                </div>
            </div>
            <main className="app">
                <Nav/>
                { children }
            </main>
        </body>
    </html>
  )
}

export default RootLayout
