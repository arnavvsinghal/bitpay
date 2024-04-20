const StickyScrollHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-8xl mx-auto pt-4 text-textprimary font-semibold">
      {children}
    </div>
  );
};

export default StickyScrollHeading;
