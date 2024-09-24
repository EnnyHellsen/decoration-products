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
  <h3 class="font-bold">{product.title}</h3>
  <p class="italic"> {new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'}).format(product.price)}</p>

  <div class={clickedProduct === product.id ? 'modal-visible' : 'modal-hidden'}>
    <div class="modal">
      <h3 class="text-xl font-bold text-center">{product.title}</h3>
      <img class="w-[300px] mx-[auto]" src={product.images[1] || product.images[0]} alt={product.title}/>
      <p class="pb-[10px]"> {product.description} </p>
      <p class="italic"> Height {product.dimensions.height} in</p>
      <p class="italic"> Width {product.dimensions.width} in</p>
      <p class="italic pb-[10px]"> Depth {product.dimensions.depth} in</p>
      <p> <span class="font-bold"> Rating: </span> {product.rating} out of 5</p>
    </div>
  </div>
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

  .modal-visible {
    display: block;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    inset: 0 0 0 0;
    width: 100%;
    height: 100%;
  }

  .modal-hidden {
    display: none;
  }

  .modal {
    background-color: white;
    border-radius: 7px;
    width: 90%;
    max-width: 500px;
    height: max-content;
    padding: 20px;
    margin: 60px auto 0;
  }
	
</style>