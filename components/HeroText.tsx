const HeroText = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] text-center gap-5">
      <h1 className="text-7xl">
        Accounting 
        <div className="relative inline text-primaryAccent dark:text-dm-accent">
          <span className="ml-5 before:block before:absolute before:-bottom-4 before:-inset-1 before:-skew-y-3 before:bg-[url(/images/zigzag.png)] before:bg-no-repeat before:bg-bottom before:-z-10 relative inline-block">made simple</span><br /> 
          </div> for small businesses.
      </h1>
      <p className="subtitle text-lg w-2/3">
      Most bookkeeping software is accurate, but hard to use. We make <br /> the opposite trade-off, and hope you don't get audited.
      </p>
    </div>
  )
}

export default HeroText