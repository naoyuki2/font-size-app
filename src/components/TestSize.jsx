import { useSelector } from "react-redux/es/hooks/useSelector";

const TestSize = () => {
  const inputFontSize = useSelector((state) => state.fontSize.inputFontSize);
  return <div style={{ fontSize: `${inputFontSize}px` }}>text</div>;
};

export default TestSize;
