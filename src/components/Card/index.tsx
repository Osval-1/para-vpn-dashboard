type CardProps = {
  header: string;
  body: string;
  icon: string;
  onclick: () => void;
};

const Card = ({ header, body, icon, onclick }: CardProps) => {
  return (
    <section
      className="bg-white w-[350px] h-[100px] rounded-3xl flex flex-row px-12 items-center gap-5 cursor-pointer"
      onClick={onclick}
    >
      <figure>
        <img src={icon} alt="add server" className="w-16 h-16" />
      </figure>
      <div className="flex flex-col gap-2">
        <h2 className="font-inter font-semibold text-xl">{header}</h2>
        <p className="font-inter font-light text-sm text-text-body">{body}</p>
      </div>
    </section>
  );
};

export default Card;
