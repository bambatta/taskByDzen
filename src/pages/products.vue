<template>
    <div class="main">
        <div class="main__head">
            <div class="main__page-img">
                <img src="/img/add.png" alt="add" class="main__page-logo">
            </div>
            <h1 class="main__title">Продукты / <span>{{ products?.length }}</span></h1>

            <div class="main__selects">
                <div class="main__selects-section">
                    <h5 class="main__selects-head">Тип: </h5>
                    <b-form-select v-model="productType" :options="optionsType"></b-form-select>
                </div>
                <div class="main__selects-section">
                    <h5 class="main__selects-head">Спецификация:</h5>
                    <b-form-select v-model="productSpecification" :options="optionsSpecification"></b-form-select>
                </div>
            </div>
        </div>
        <div class="main__content">
            <div class="products">
                <div v-for="product in products" :key="product.id" class="products__item">
                    <div class="products__item-unit">
                        <div class="products__about">
                            <span :class="['products__about--status', { 'green': product.isNew }]"></span>
                            <div class="products__item-img">
                                <img :src="product.photo" class="products__item--photo" alt="product">
                            </div>
                        </div>
                        <div class="pruducts__naming">
                            <h5 class="products__naming-head">{{ product.title }}</h5>
                            <p class="products__naming-serial">{{ product.serialNumber }}</p>
                        </div>
                    </div>
                    <div class="parishes__inner">

                        <div class="parishes__date">
                            <div class="parishes__date-short">
                                <p>04 <span>/</span> 12</p>
                            </div>
                            <div class="parishes__date-full">
                                <p>04 <span>/</span> Апрель <span>/</span>2017</p>
                            </div>
                        </div>
                        <div class="parishes__price">
                            <p class="parishes__price-foreign">2500$</p>
                            <p class="parishes__price-own">250000.50UAH</p>
                        </div>
                        <div class="parishes__delete">
                            <button class="parishes__delete-btn">
                                <img src="/img/trash.png" class="parishes__delete-img" alt="trash">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const products = ref()

const productType = ref(null),
    productSpecification = ref(null);

const optionsType = ref([
    { value: null, text: 'Выберете тип' },
    { value: 'Moniotors', text: 'Monitors' },
])

const optionsSpecification = ref([
    { value: null, text: 'Выберете спецификацию' },
    { value: 'Specification 1', text: 'Specification 1' },
    { value: 'Specification 2', text: 'Specification 2' },
])

async function getProduct() {
    const data = await $fetch('/api/products');

    products.value = data
}

getProduct();

</script>