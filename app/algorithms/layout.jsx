import '@styles/globals.css';
import Common from '@components/Common'

export const metadata = {
    title: "Algorithms",
    description:'I will write the description'
}

const AlgoLayout = ({children}) => {
  return (
        <body>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Common />
                    {children}
                </main>
        </body>
  )
}

export default AlgoLayout