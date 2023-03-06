<template>
  <div class="main">
    <div class="main__head">
      <div class="main__page-img">
        <img src="/img/add.png" alt="add" class="main__page-logo">
      </div>
      <h1 class="main__title">Приходы / <span>{{ orders?.length }}</span></h1>
    </div>
    <div :class="['main__content', { 'main__content--full': !ordersModal }]">
      <div class="parishes">
        <div class="parishes__item" v-for="order in orders" :key="order.id">
          <h4 v-if="!ordersModal" class="parishes__item-head">{{ order.title }}</h4>
          <div :class="['parishes__inner', { 'parishes__inner--full': ordersModal }]">
            <div class="parishes__menu">
              <button @click="getProducts(order.products)" class="parishes__options">
                <img src="/img/options.png" class="parishes__options-img" alt="options">
              </button>
              <div class="parishes__menu-info">
                <p class="parishes__menu-quantity">
                  {{ order.products.length }}
                </p>
                <span class="parishes__menu-detail">Продукта</span>
              </div>
            </div>
            <div class="parishes__date">
              <div class="parishes__date-short">
                <p>{{ dataTimeMY(order.date) }}</p>
              </div>
              <div class="parishes__date-full">
                <p>{{ dataTime(order.date) }}</p>
              </div>
            </div>
            <div class="parishes__price">
              <p class="parishes__price-foreign">{{ sumDolArr(order.products) }}$</p>
              <p class="parishes__price-own">{{ sumUahArr(order.products) }}UAH</p>
            </div>
            <div class="parishes__delete">
              <button class="parishes__delete-btn">
                <img src="/img/trash.png" class="parishes__delete-img" alt="trash">
              </button>
            </div>
          </div>
        </div>

      </div>
      <div v-if="ordersModal" class="parishes-products">
        <h4 class="parishes-products__head">Продукты</h4>
        <div class="parishes-products-add">
          <button class="parishes-products-btn">
            + Добавить
          </button>
        </div>
        <div v-for="product in products" :key="product.id" class="parishes-products__item">
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
          <div class="products__about-info">
            <p :class="['products__about--text', { 'products__about--green': product.isNew }]">
              {{ product.isNew ? "Свободен" : "Ремонт" }}
            </p>
          </div>
          <div class="parishes__delete">
            <button @click="deletePopupOpen(products, product)" class="parishes__delete-btn">
              <img src="/img/trash.png" class="parishes__delete-img" alt="trash">
            </button>
          </div>
        </div>
        <button @click="closeModal(false)" class="parishes-products--close">x</button>
      </div>
    </div>
    <div v-if="removeProduct" class="parishes-products__delete">
      <h3>Вы уверены в удалении прихода ?</h3>
      <div class="parishes-products__delete-item">
        <div class="products__item-unit">
            <div class="products__about">
              <span :class="['products__about--status', { 'green': productForRemove?.isNew }]"></span>
              <div class="products__item-img">
                <img :src="productForRemove?.photo" class="products__item--photo" alt="product">
              </div>
            </div>
            <div class="pruducts__naming">
              <h5 class="products__naming-head">{{ productForRemove?.title }}</h5>
              <p class="products__naming-serial">{{ productForRemove?.serialNumber }}</p>
            </div>
          </div>
      </div>
      <div class="parishes-products__delete-actions">
        <button class="parishes-products__delete-close" @click="removeProduct = false">Close</button>
        <button class="parishes-products__delete-enter" @click="deleteProduct(products ,productForRemove.id)">Enter</button>
      </div>
    </div>
  </div>
</template>

<script setup>

import moment from "moment";

const products = ref(null);

const orders = ref(null);

const productForRemove = ref(null);

const removeProduct = ref(false);

const ordersModal = ref(false);

// Methods

function deletePopupOpen(arr, product) {
  removeProduct.value = !removeProduct.value
  productForRemove.value = product
}
function deleteProduct(arr, id) {
  products.value = arr.filter(item => item.id !== id)
  
}

function closeModal() {
  ordersModal.value = !ordersModal.value
}

function dataTime(e) {
  return moment(e).format(("DD / MMMM / YYYY"));
}

function sumDolArr(e) {
  return e.map(item => item.price[0].value).reduce((prev, curr) => prev + curr, 0);
}

function sumUahArr(e) {
  return e.map(item => item.price[1].value).reduce((prev, curr) => prev + curr, 0);
}

function dataTimeMY(e) {
  return moment(e).format(("MM / YYYY"));
}

function getProducts(e) {
  closeModal()
  products.value = e
}

async function getOrders() {
  const data = await $fetch('/api/orders');
  orders.value = data
}

getOrders();

</script>