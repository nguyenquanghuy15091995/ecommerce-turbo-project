import { NextPage } from "next";
// import Tabs from "ui/components/Tabs";
// import HeroBanner from "../containers/HeroBanner";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { WidgetData } from "../containers/types";
import { useWidget } from "../containers/dynamic-loader";

interface PageData {
  id: number;
  name: string;
  slug: string;
  widgets: WidgetData[];
}

interface HomePageProps {
  widgets: WidgetData[];
}

const IndexPage: NextPage<HomePageProps> = ({ widgets }) => {
  const WidgetMemo = useWidget(widgets);
  return (
    <>
      <Header />
      {WidgetMemo}
      <Footer />
    </>
  );
};

export default IndexPage;

export async function getServerSideProps() {
  const pageRes = await fetch(
    "https://dev.api.yody.io/unicorn/storefront-core/pages/home"
  );
  const pageResJson: PageData = await pageRes.json();
  const widgets: WidgetData[] = [];
  pageResJson.widgets.forEach((item) => {
    widgets.push({
      ...item,
      widget_index: item.widget_index || 0,
    });
  });
  widgets.sort((a, b) => (a.widget_index || 0) - (b.widget_index || 0));
  return {
    props: {
      widgets: widgets,
    },
  };
}
