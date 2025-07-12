function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>It Works! 🎉</h1>
      <p>Welcome on board for this new journey!!</p>
      <Button />
      <Page />
    </div>
  );
}

function Button(){
  return(
    <button>Click Here👍</button>
  );
}

function Page(){
  return (
    <ol>
      <li>I am learning React to use it during my internship</li>
      <li>I also want to finish my web developper path</li>
      <li>To have another career I can rely on while in college🤗</li>
    </ol>
  );
}

export default App;


