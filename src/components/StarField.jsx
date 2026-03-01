function StarField() {
  return (
    <div className="absolute inset-0 -z-20">
      <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-[stars_100s_linear_infinite]" />
    </div>
  );
}

export default StarField;