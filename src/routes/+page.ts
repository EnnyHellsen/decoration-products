/** @type {import('./$types').PageLoad} */
export async function load({ fetch }: {
    fetch: any, 
  }) {
	const res = await fetch('https://dummyjson.com/products/category/home-decoration')
	const products = await res.json()

	return { products };
}