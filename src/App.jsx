import './App.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

export default function App() {//anything inside this function is regarded as a child of said function.
    return (
        <div className='container'>
            <Header />
            <Main />
            <Footer />
            
        </div>
    )
}
