import './App.scss';

export default function App() {
  return (
    <>
      <main className="full-bleed-wrapper">
        <h1>Full-Bleed Layout</h1>
        <p>Some content here...</p>
        <div className="full-bleed">
          <img src="https://github.com/defpis/RubiksCube/blob/main/cover.png?raw=true" alt="Rubik's Cube" />
        </div>
        <p>Some content here...</p>
      </main>
    </>
  );
}
