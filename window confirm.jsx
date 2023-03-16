function App() {
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to do this?");
    if (confirmed) {
      // User clicked OK
      // Do something here
    } else {
      // User clicked Cancel
      // Do something else here
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
