// app/home_screen/layout.js
export default function HomeScreenLayout({ children }) {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        Home Screen Header
      </header>
      <main>{children}</main>
    </div>
  );
}
