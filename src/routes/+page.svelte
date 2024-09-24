<script lang="ts">
  import "../app.css"
  import Product from '../lib/components/Product.svelte'
  import type { ProductTypes } from '../lib/components/Product.svelte'

  interface Data {
    products: {
      products: ProductTypes[]
    }
  }

  /** @type {import('./$types').PageData} */
	export let data: Data
  const products = data.products.products
  console.log(products)

  let clickedProduct = ''

  const toggleModal = (productId :string) => {
    clickedProduct = clickedProduct === productId ? '' : productId
    console.log(clickedProduct)
  }
</script>

<style>
  .title {
    font-size: 3rem;
    text-align: center;
    padding: 30px 0 40px;
  }

  .product-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
    margin: 0 20px;
  }

  @media screen and (min-width: 800px) {
    .product-container {
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
  }
</style>

<main class="page-layout">
  <h1 class="title"> Home Decoration Products </h1>

  <div class="product-container">
    {#each products as product}
      <Product {product} {clickedProduct} {toggleModal} />
    {/each}
  </div>
</main>
