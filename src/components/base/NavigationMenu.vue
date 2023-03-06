<template>
    <aside class="aside">
        <div class="aside__conetent">
            <div class="aside__profile">
                <img src="/img/avatar.jpeg" alt="avatar" class="aside__profile-img">
                <button class="aside__profile-setup">
                    <img src="/img/gear.png" class="aside__profile-setting" alt="gear">
                </button>
            </div>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__list-item"><NuxtLink to="/" class="nav__link nav__link--active">Приход</NuxtLink></li>
                    <li class="nav__list-item"><NuxtLink class="nav__link">Группы</NuxtLink></li>
                    <li class="nav__list-item"><NuxtLink to="/products" class="nav__link">Продукты</NuxtLink></li>
                    <li class="nav__list-item"><NuxtLink class="nav__link">Пользователи</NuxtLink></li>
                    <li class="nav__list-item"><NuxtLink class="nav__link">Настройки</NuxtLink></li>
                </ul>
            </nav>
        </div>

    </aside>
</template>

<script setup>

</script>
