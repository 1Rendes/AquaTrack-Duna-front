import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="40"
      width="40"
      color="#9be1a0"
      ariaLabel="tail-spin-loading"
      radius="1"
      strokeWidth="7"
    />
  );
};

export default Loader;
