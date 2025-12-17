import { Card, Skeleton } from "antd";

const ProductSkeleton = () => {
  return (
    <Card style={{ width: "100%" }}>
      <Skeleton.Image active style={{ width: 200, height: 200 }} />
      <Skeleton active paragraph={{ rows: 2 }} />
    </Card>
  );
};

export default ProductSkeleton;
