import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className=" h-[1000px] mt-[100px] ml-96 ">
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
};
