import ProductList from "@/components/shared/product/product-list";
import { getNewArrivals } from "@/lib/actions/product.actions";

const HomePage = async () => {

  const newArrivals = getNewArrivals();

  return (<>

    <ProductList data={newArrivals} title="Newest Arrival" limit={4} />

  </>

  );
}

export default HomePage;