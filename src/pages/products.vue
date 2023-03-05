<template>
    <div class="main">
        <div class="main__head">
            <div class="main__page-img">
                <img src="/img/add.png" alt="add" class="main__page-logo">
            </div>
            <h1 class="main__title">Продукты / <span>{{ products.length }}</span></h1>
        </div>
        <div class="main__content">
            
        </div>
    </div>
</template>

<script setup>

const products = ref()

async function getProduct(){
    const data = await $fetch('/api/products');

    products.value = data
    console.log(products.value)
}

getProduct();

</script>