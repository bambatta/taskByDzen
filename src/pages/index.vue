<template>
  <div class="main">
    <div class="main__head">
      <div class="main__page-img">
        <img src="/img/add.png" alt="add" class="main__page-logo">
      </div>
      <h1 class="main__title">Приходы / <span>25</span></h1>
    </div>
    <div class="main__content">
      <div class="parishes">
        <div class="parishes__item">
          <h4 class="parishes__item-head">Lorem ipsum dolor</h4>
          <div class="parishes__inner">
            <div class="parishes__menu">
              <div class="parishes__options">
                <img src="/img/options.png" class="parishes__options-img" alt="options">
              </div>
              <div class="parishes__menu-info">
                <p class="parishes__menu-quantity">
                  23
                </p>
                <span class="parishes__menu-detail">Продукта</span>
              </div>
            </div>
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
        <div class="parishes__item">
          <h4 class="parishes__item-head">Lorem ipsum dolor</h4>
          <div class="parishes__inner">
            <div class="parishes__menu">
              <div class="parishes__options">
                <img src="/img/options.png" class="parishes__options-img" alt="options">
              </div>
              <div class="parishes__menu-info">
                <p class="parishes__menu-quantity">
                  23
                </p>
                <span class="parishes__menu-detail">Продукта</span>
              </div>
            </div>
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

async function getOrders(){
    const orders = await $fetch('/api/orders');
    console.log(orders)
}

getOrders();

</script>