import peopleData from "../data.json";

export default function Data() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center font-extrabold gap-6 w-full">
    {peopleData.map((person, index) => (
      <div
        key={person.linkedIn}
        className="bg-nav-bg text-people-card rounded-xl p-6 shadow-lg w-[350px]"
      >
        <h3 className="text-xl font-bold">{person.fullName}</h3>
        <p className="text-sm text-secondary">{person.handler}</p>
          <p className="mt-2">{person.techStack}</p>
          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm nav-bg hover:underline mt-2 inline-block"
          >
            LinkedIn
          </a>
        </div>
      ))}
    </div>
  );
}
