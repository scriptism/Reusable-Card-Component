// import "./App.css";
import Card from "./Card.jsx";

function App() {
  const profiles = [
    {
      id: 1,
      name: "Ali",
      title: "Frontend developer",
      bio: "I like to work with different frontend technologies and play video games.",
    },
    {
      id: 2,
      name: "Karim",
      title: "Fullstack developer",
      bio: "I like to work with different backend technologies and play football.",
    },
    {
      id: 3,
      name: "Sara",
      title: "Backend developer",
      bio: "I like to work with different backend technologies and watch movies.",
    },
    {
      id: 4,
      name: "Tina",
      title: "UI/UX designer",
      bio: "I like to design different user interfaces and watch series.",
    },
  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}
export default App;
