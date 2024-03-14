<script setup>
import { ref } from "vue"

const page = ref(0)
</script>



<template>
    <div class="menu">
        <router-link to="/" @click="page = 0" class="menu-item" :class="page == 0 ? 'active' : ''">
                <v-icon scale=1.2 name="gi-brain"></v-icon>
        </router-link>
        <router-link to="/focus-analysis" @click="page = 1" class="menu-item" :class="page == 1 ? 'active' : ''">
                <v-icon scale=1.2 name="io-analytics"></v-icon>
        </router-link>
    </div>

</template>

<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    margin-right: 5%;
    height: 100%;
    background-color: #1a1c1e;
}

.menu-item {
    text-decoration: none;
    cursor: pointer;
    color: rgb(155, 155, 156);
    width: 100%;
    padding: 25%;
    transition: all linear 0.1s;
    margin-top: 50%;
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

.item-text {
    border-radius: 10px;
    width: fit-content;
    font-size: 1rem;
}
</style>
