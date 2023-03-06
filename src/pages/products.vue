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
        <div class="main__content main__content--full">
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

                    <div class="products__expires-date">
                        <div class="products__expires-item">
                            <p>C</p>
                            <span>{{ dataTime(product.guarantee.start) }}</span>
                        </div>
                        <div class="products__expires-item">
                            <p>По</p>
                            <span>{{ dataTime(product.guarantee.end) }}</span>
                        </div>
                    </div>
                    
                    <div class="parishes__price">
                        <p class="parishes__price-foreign">{{ product.price[0].value }} {{ product.price[0].symbol }}</p>
                        <p class="parishes__price-own">{{ product.price[1].value }} {{ product.price[1].symbol }}</p>
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
</template>

<script setup>

import moment from "moment";

const products = ref();
const arg = ref("")

const productType = ref(null),
    productSpecification = ref(null);

const optionsType = ref([
    { value: null, text: 'Выберете тип' },
    { value: 'Monitors', text: 'Monitors' },
])

const optionsSpecification = ref([
    { value: null, text: 'Выберете спецификацию' },
    { value: 'Specification 1', text: 'Specification 1' },
    { value: 'Specification 2', text: 'Specification 2' },
])

function dataTime(e) {
    return moment(e).format(("DD / MM / YYYY"));
}

async function getProduct() {
    const data = await $fetch('/api/products');

    products.value = data
}

watch(() => productType.value, (prev) => {
      if(prev == 'Monitors') {
        products.value = products.value.filter(product => product.type == 'Monitors')
      } else if(prev == null) {
        getProduct()
      }
});

watch(() => productSpecification.value, (prev) => {
      if(prev == 'Specification 1') {
        products.value = products.value.filter(product => product.specification == 'Specification 1')
      } else if(prev == null) {
        getProduct()
      }
});


getProduct();

</script>