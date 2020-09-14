// Types
import { NextComponentType } from "next";
// Components
import MainLayout from "components/ecommerce/MainLayout/MainLayout";
import MainCarousel from "components/ecommerce/MainCarousel/MainCarousel";
import CategoryListRenderer from "components/ecommerce/CategoryList/CategoryListRenderer";
import ProductListRenderer from "components/ecommerce/ProductList/ProductListRenderer";
import SimpleHeading from "components/ecommerce/SimpleHeading";

const Home = ({ categories, products }) => {
	return (
		<MainLayout title="React eCommerce">
			<MainCarousel />
			<SimpleHeading title="Product Categories" />
			<CategoryListRenderer
				categories={categories}
				breakpoints={{
					xl: 8,
					lg: 8,
					md: 8,
					sm: 24,
					xs: 24
				}}
			/>
			<SimpleHeading title="On sale Products" level={2} />
			<ProductListRenderer
				skeleton
				skeletonCount={4}
				products={products}
				breakpoints={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 24 }}
			/>
		</MainLayout>
	);
};

Home.getInitialProps = () => {
	const API_CATEGORIES = "http://localhost:4200/api/ecommerce/categories";
	const API_PRODUCTS = "http://localhost:4200/api/ecommerce/products";
	const API_OFFERS = "http://localhost:4200/api/ecommerce/offers";

	const fetchData = async () => {
		try {
			// Fetch
			const productsData = await fetch(API_PRODUCTS);
			const offersData = await fetch(API_OFFERS);
			const categoriesData = await fetch(API_CATEGORIES);
			// Format
			const products = await productsData.json();
			const offers = await offersData.json();
			const categories = await categoriesData.json();
			return {
				products: products.data,
				offers: offers.data,
				categories: categories.data
			};
		} catch (err) {
			console.log(err);
		}
	};

	return fetchData();
};

export default Home;
