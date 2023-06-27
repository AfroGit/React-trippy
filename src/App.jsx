import './App.css'

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./public/favicon.svg" width="40px" />
            </nav>
        </header>
    )
}

function Main(){
    return(
        <section>
         <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        
        </section>
        
    )
    
}

function Footer(){
    return(
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
        
    )
    
}

export default function Page() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
            
        </div>
    )
}
