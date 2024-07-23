import LupoButton from './components/LupoButton/LupoButton';

export default function App() {
    return (
        <main className="App">
            <h1 className="App--title">Lupokedex</h1>

            <section className="App--section--LupoButton">
                <div className="App--section--LupoButton--container">
                    <LupoButton variant="primary">Search</LupoButton>
                    <LupoButton variant="primary" disabled={true}>
                        Search
                    </LupoButton>
                </div>

                <div className="App--section--LupoButton--container">
                    <LupoButton variant="secondary">Search</LupoButton>
                    <LupoButton variant="secondary" disabled={true}>
                        Search
                    </LupoButton>
                </div>
            </section>
        </main>
    );
}
