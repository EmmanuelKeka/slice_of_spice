function Footer() {
  return (
    <footer className="px-[5%] flex flex-row justify-between TopBorder mt-20 py-10">
      <div className="">
        <div className="flex flex-col mb-2">
          <h1 className="font-bold">GET IN TOUCH</h1>
        </div>
        <div>
          <p className="w-[300px]">
            Call us at (206) 283-3313 or email reservations@sliceofspice.com
          </p>
          <p>© 1998 - 2023 sliceofspice</p>
        </div>
      </div>
      <div>
        <h1 className=" font-bold mb-2">POLICIES</h1>
        <p className="w-[300px]">
          Click here for more information on dietary restrictions, attire,
          vaccines, children, and cancellations.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
