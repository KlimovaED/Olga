import {Header} from "./loyaut/header/Header";
import {Main} from "./loyaut/sections/main/Main";
import {SectionTitle} from './components/SectionTitle';
import {Helps} from './loyaut/sections/helps/Helps';
import {About} from './loyaut/sections/about/About';
import {Services} from './loyaut/sections/services/Services';
import {Questions} from './loyaut/sections/faq/Questions';
import {Contacts} from './loyaut/sections/contacts/Contacts';
import {Footer} from './loyaut/footer/Footer';


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Helps/>
            <About/>
            <Services/>
            <Questions/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;


