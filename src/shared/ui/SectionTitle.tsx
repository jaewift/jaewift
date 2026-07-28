interface Props {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold font-playpen tracking-widest">
      {children}
      <span className="text-primary">.</span>
    </h1>
  );
};

export default SectionTitle;
