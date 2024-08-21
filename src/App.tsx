import { useState } from 'react';
import { LupoButton } from './components/LupoButton';
import { LupoSearchbar } from './components/LupoSearchbar';

export default function App() {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <main className="App">
            <h1 className="App--title">Lupokedex</h1>

            <section className="App--section--LupoCompo">
                <div className="App--section--LupoCompo--container">
                    <LupoSearchbar
                        type="text"
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder="Rechercher..."></LupoSearchbar>
                    <LupoSearchbar type="text" placeholder="Recherche indisponible" disabled></LupoSearchbar>
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
