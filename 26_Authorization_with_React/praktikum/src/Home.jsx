import {Breadcrumb, Layout, Menu} from "antd";
const {Header, Content, Footer} = Layout;

const Home = () => (
  <Layout>
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: "0 50px",
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <h1>Home</h1>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default Home;
