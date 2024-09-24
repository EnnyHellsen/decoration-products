<script lang="ts">
  import "../../app.css"

  export let product: any

	let clickedItem = ''
  const toggleModal = (item : any) => {
    clickedItem = clickedItem === item.id ? '' : item.id
  }

</script>

<button on:click={() => toggleModal(product)} class="product">

  <div class="image-container">
    <img class="image" src={product.images[0]} alt={product.title}/>
    <span 
      class="availability" 
      style:background-color={product.availabilityStatus === 'In Stock' ? 'green' : 'red'}
    > 
    {product.availabilityStatus}</span>
  </div>

  <h2>{product.title}</h2>
  <p> {product.price}</p>

  <div class={clickedItem === product.id ? 'modal-visible' : 'modal-hidden'}>
    <p> {product.description} </p>
    <p class="italic"> Height: {product.dimensions.height} cm</p>
    <p class="italic"> Width: {product.dimensions.width} cm</p>
    <p class="italic"> Depth: {product.dimensions.depth} cm</p>

    <p> <span class="font-bold"> Rating: </span> {product.rating}</p>
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
    padding: 30px 20px;
    grid-column: 1 / 3;
    border-radius: 7px;
    position: relative;
  }

  .image-container:hover {
    background-color: #e0dede;
  }

  .image {
    width: 100%;
  }

  .availability {
    color: white;
    right: 0;
    bottom: 30px;
    padding: 5px;
    position: absolute;
    border-radius: 5px 0 0 5px;
  }

  .modal-visible {
    display: block;
    position: absolute;
    background-color: bisque;
    width: 300px;
  }

  .modal-hidden {
    display: none;
  }
	
</style>