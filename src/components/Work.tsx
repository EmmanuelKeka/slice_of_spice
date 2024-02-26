import React from "react";
type MyProps = {};
type MyState = {
  name: string; // like this
};

export default class Work extends React.Component<MyProps, MyState> {
  state: MyState = {
    name: "emmanuel",
  };
  componentDidMount(): void {
    console.log("moment");
  }

  render(): React.ReactNode {
    return (
      <section className=" flex flex-col justify-center items-center rounded-2xl h-full bg-black">
        <h1 className=" text-7xl font-semibold text--effect text-white my-10">
          Work
        </h1>
        <div className="grid grid-cols-3 grid-rows-1 gap-12 w-full">
          <div className=" flex justify-center items-center">
            <div className=" liquid2 ">&nbsp;</div>
            <h1 className="text-6xl font-semibold text--effect absolute text-center text-white"></h1>
          </div>
          <div className=" flex justify-center items-center">
            <div className=" liquid2 bg-indigo-700">&nbsp;</div>
            <h1 className="text-6xl font-semibold text--effect absolute text-center text-white"></h1>
          </div>
          <div className=" flex justify-center items-center">
            <div className="liquid2 bg-indigo-700">&nbsp;</div>
            <h1 className="text-6xl font-semibold text--effect absolute text-center text-white"></h1>
          </div>
        </div>
      </section>
    );
  }
}
