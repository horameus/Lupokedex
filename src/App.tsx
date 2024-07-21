import LupoButton from './components/LupoButton/LupoButton';

export default function App() {
    return (
        <div className="main-container">
            <h1>Lupokedex</h1>

            <div className="container">
                <LupoButton variant="primary">Search</LupoButton>
                <LupoButton variant="primary" disabled={true}>
                    Search
                </LupoButton>
            </div>

            <div className="container">
                <LupoButton variant="secondary">Search</LupoButton>
                <LupoButton variant="secondary" disabled={true}>
                    Search
                </LupoButton>
            </div>
        </div>
    );
}
