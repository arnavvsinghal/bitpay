const StickyScrollHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-8xl px-4 pt-4 text-center text-textprimary font-semibold">
      {children}
    </div>
  );
};

export default StickyScrollHeading;
