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

  let clickedProduct = ''

  const toggleModal = (productId :string) => {
    clickedProduct = clickedProduct === productId ? '' : productId
  }
</script>

<main class="page-layout pb-[60px]">
  <h1 class="text-5xl font-bold text-center py-[50px]"> Decoration Products </h1>

  <div class="product-container">
    {#each products as product}
      <Product {product} {clickedProduct} {toggleModal} />
    {/each}
  </div>
</main>

<style>
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
