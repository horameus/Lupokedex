import { LupoButton } from './components/LupoButton';
import { LupoSearchbar } from './components/LupoSearchbar';

export default function App() {
    return (
        <main className="App">
            <h1 className="App--title">Lupokedex</h1>

            <section className="App--section--LupoCompo">
                <div className="App--section--LupoCompo--container">
                    <LupoSearchbar value=""></LupoSearchbar>
                    <LupoSearchbar value="" disabled></LupoSearchbar>
                </div>
            </section>

            <section className="App--section--LupoCompo">
                <div className="App--section--LupoCompo--container">
                    <LupoButton variant="primary">Search</LupoButton>
                    <LupoButton variant="primary" disabled>
                        Search
                    </LupoButton>
                </div>

                <div className="App--section--LupoCompo--container">
                    <LupoButton variant="secondary">Search</LupoButton>
                    <LupoButton variant="secondary" disabled>
                        Search
                    </LupoButton>
                </div>
            </section>
        </main>
    );
}
