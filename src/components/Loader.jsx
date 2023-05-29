import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="mt-40 text-[14px] font-extrabold text-[#f1f1f1]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
