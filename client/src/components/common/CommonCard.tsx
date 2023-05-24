import { Card } from "antd";
const CommonCard = ({ children }) => {
  return (
    <Card
      hoverable
      className=" hover:border-t-black p-0
  relative w-full text-left ring-1 bg-white 
  shadow border-t-black ring-gray-200 border-t-4
   rounded-lg max-w-xs mx-auto"
    >
      {children}
    </Card>
  );
};

export default CommonCard;
