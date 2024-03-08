<script setup>
import { ref } from "vue"

const page = ref(0)
</script>



<template>
    <div class="menu">
        <div class="logo">Halo</div>
        <router-link to="/" @click="page = 0">
            <div class="menu-item" :class="page == 0 ? 'active' : ''">
                <v-icon class="menu-icon" scale=1.2 name="gi-brain"></v-icon>
                <div class="item-text">My Focus</div>
            </div>
        </router-link>
        <router-link to="/focus-analysis" @click="page = 1">
            <div class="menu-item" :class="page == 1 ? 'active' : ''">
                <v-icon class="menu-icon" scale=1.2 name="io-analytics"></v-icon>
                <div class="item-text">Focus Analysis</div>
            </div>
        </router-link>
    </div>

</template>

<style scoped>
a {
    text-decoration: none;
    width: 100%;
}

.logo {
    color: #4663e7;
    font-size: 2.5rem;
    font-weight: 800;
    margin: 2%;
    letter-spacing: 0.05rem;
}

.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    padding: 1%;
    margin-right: 1%;
    height: 96%;
    background-color: #1a1c1e;
}

.menu-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: rgb(155, 155, 156);
    width: 100%;
    padding: 5% 0 5% 0;
    transition: all linear 0.1s;
    margin-top: 10%;
    border-radius: 10px;
}

.menu-item.active {
    color: white;
    background-color: #4663e7;
}

.menu-item:hover {
    color: white;
    background-color: #4663e7;
}

.menu-icon {
    margin-left: 5%;
}

.item-text {
    border-radius: 10px;
    width: fit-content;
    font-size: 1rem;
    margin-left: 5%;
}
</style>
