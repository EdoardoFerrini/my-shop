function App() {
  return (
    <div className="page">
      <h1 className="title">Shop</h1>

      <br />
      <input type="text" />
      <input type="text" className="error" />
      <input type="number" className="error" />
      <textarea />
      <br />

      <button className="btn">default</button>
      <button className="btn dark">dark</button>
      <button className="btn danger">danger</button>
      <button className="btn primary">primary</button>
      <button className="btn accent">accent</button>
      <button className="btn success">success</button>
      <button className="btn success outline">outline</button>
      <button className="btn outline">outline</button>
      <button className="btn primary">base</button>
      <button className="btn primary lg">lg</button>
    </div>
  );
}

export default App;
