const HeroText = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] text-center gap-5">
      <h1 className="text-7xl">
        Accounting <span className="text-[#1c64f2]">made simple</span> for small businesses.
      </h1>
      <p className="subtitle text-lg w-2/3">
      Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don't get audited.
      </p>
    </div>
  )
}

export default HeroText