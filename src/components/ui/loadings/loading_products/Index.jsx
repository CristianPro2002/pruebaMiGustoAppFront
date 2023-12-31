import { Skeleton, Space } from "antd";
import { loadingProducts } from "@/styles/Components/Loadings/loadingProducts";

export function Loading_Page_Products() {
  const { styles } = loadingProducts();

  return (
    <Space direction="vertical" style={styles.styleSpace}>
      <center style={{ display: "flex", flexDirection: "column" }}>
        <Skeleton.Image active style={{ padding: "10px" }} />
      </center>
      <div style={{ paddingTop: "30px" }}>
        <Skeleton.Input active />
      </div>
      <Space direction="horizontal" style={styles.styleSubcategories}>
        <Skeleton.Input active />
        <Skeleton.Input active />
      </Space>
      <Skeleton.Avatar active shape="square" style={styles.styleProduct} />
      <Skeleton.Avatar active shape="square" style={styles.styleProduct} />
    </Space>
  );
}

export function Loading_Products() {
  
  const { styles } = loadingProducts();

  return (
    <Space direction="vertical">
      <Skeleton.Avatar active shape="square" style={styles.styleProduct} />
      <Skeleton.Avatar active shape="square" style={styles.styleProduct} />
    </Space>
  );
}
