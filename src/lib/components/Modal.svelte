<script lang="ts">
import "../../app.css"
import type { ProductTypes } from './Product.svelte'

export let product: ProductTypes
export let clickedProduct : string
</script>

<div class={clickedProduct === product.id ? 'modal-visible' : 'modal-hidden'}>
  <div class="modal">
    <p class="text-xl font-bold text-center">{product.title}</p>
    <img class="w-[300px] mx-[auto]" src={product.images[1] || product.images[0]} alt={product.title}/>
    <p class="pb-[10px]"> {product.description} </p>
    <p class="italic"> Height {product.dimensions.height} in</p>
    <p class="italic"> Width {product.dimensions.width} in</p>
    <p class="italic pb-[10px]"> Depth {product.dimensions.depth} in</p>
    <p> <span class="font-bold"> Rating: </span> {product.rating} out of 5</p>
  </div>
</div>

<style>
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