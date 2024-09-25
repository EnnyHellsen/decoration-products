<script lang="ts" context="module">
    export interface ProductTypes {
    id: string
    title: string
    price: number
    images: string[]
    description: string
    availabilityStatus: string
    rating: string
    dimensions: {
      depth: number
      height: number
      width: number
    }
  }
</script>

<script lang="ts">
  import "../../app.css"
  import Modal from './Modal.svelte'

  export let product: ProductTypes
  export let toggleModal : (productId: string) => void
  export let clickedProduct : string
</script>

<button on:click={() => toggleModal(product.id)} class="product">
  <div class="image-container">
    <img class="w-[100%] text-center" src={product.images[0]} alt={product.title}/>
    <span 
      class="availability" 
      style:background-color={product.availabilityStatus === 'In Stock' ? 'green' : 'red'}
    > 
    {product.availabilityStatus}</span>
  </div>
  <p class="font-bold">{product.title}</p>
  <p class="italic"> 
    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(product.price)}
  </p>

  <Modal {product} {clickedProduct}/>
</button>

<style>
  .product {
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-gap: 16px;
    cursor: pointer;
    text-align: left;
  }

  .image-container {
    background-color: #f1f0f0;
    padding: 30px;
    grid-column: 1 / 3;
    border-radius: 7px;
    position: relative;
    transition: all 0.4s;
    min-height: 370px;
  }

  .image-container:hover {
    background-color: #d0cece;
    padding: 25px;
    transition: all 0.4s;
  }

  .availability {
    color: white;
    right: 0;
    bottom: 30px;
    padding: 5px 17px 5px 10px;
    position: absolute;
    border-radius: 5px 0 0 5px;
  }
</style>