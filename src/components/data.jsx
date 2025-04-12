//react
export default function Data({ people }) {
    return (
      <div className="flex flex-wrap justify-center font-extrabold gap-6 w-full">
        {people.map((person, index) => ( //listado dinamico
          <div
            key={index}
            className="bg-nav-bg text-texto rounded-xl p-6 shadow-lg w-[350px]"
          >
            <h3 className="text-xl font-bold">{person.fullName}</h3>
            <p className="text-sm text-secondary">{person.handler}</p>
            <p className="mt-2">{person.techStack}</p>
            <a
              href={person.linkedIn}
              className="text-sm nav-bg hover:underline mt-2 inline-block" >{person.linkedIn}
            </a>
          </div>
        ))}
      </div>
    );
  }
  