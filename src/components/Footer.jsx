import footer from "../constants/footer";

const Footer = () => {
  return (
    <div className="mt-16 px-40 py-24 flex justify-evenly bg-black font-secondary">
      {footer.map((col) => {
        return (
          <div key={col.id} className={col.id === 3 && "ml-36"}>
            <h3 className="mb-6 text-xl uppercase text-yellow-500">
              {col.header}
            </h3>
            <ul className={col.id === 3 && "flex gap-x-5"}>
              {col.links.map((row) => {
                return (
                  <li key={row.id} className={col.id === 3 ? "mb-2" : "mb-0.5"}>
                    <a
                      href={row.href}
                      className="text-xs uppercase leading-[1.7rem] text-stone-400"
                    >
                      {row.src ? (
                        <img src={row.src} alt={row.alt} width={24} height={24} />
                      ) : (
                        row.title
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
