function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>It Works! 🎉</h1>
      <p>Welcome on board for this new journey!!</p>
      <Button />
      <Page></Page> {/* I can also add it this way and write sthg inside but it doesn't show on the page*/}
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
    <>
      <header>
        <h1>Reasons I want to learn React ⚛️</h1>
      </header>
    <ol>
      <li>I am learning React to use it during my internship</li>
      <li>I also want to finish my web developper path</li>
      <li>To have another career I can rely on while in college🤗</li>
    </ol>
     <footer>All rights reserved ©</footer>
    </>
  );
}

export default App;


