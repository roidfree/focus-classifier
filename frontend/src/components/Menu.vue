<script setup>
import { ref } from "vue"

const showMenu = ref(false)

const toggleMenu = () => showMenu.value = !showMenu.value

</script>

<template>
    <div class="menu">
        <div class="menu-item">
            <v-icon v-if="!showMenu" name="gi-hamburger-menu" class="item-icon" @click="toggleMenu"></v-icon>
            <v-icon v-if="showMenu" name="bi-caret-up" class="item-icon" @click="toggleMenu"></v-icon>
        </div>
        <div v-if="showMenu" class="item-container">
            <router-link to="/">
                <div class="menu-item">
                    <v-icon class="item-icon" name="gi-brain"></v-icon>
                    <div class="item-text">My Focus</div>
                </div>
            </router-link>
            <router-link to="/new_focus">
                <div class="menu-item">
                    <v-icon class="item-icon" name="gi-brain"></v-icon>
                    <div class="item-text">New_Focus</div>
                </div>
            </router-link>
            <router-link to="/focus-analysis">
                <div class="menu-item">
                    <v-icon class="item-icon" name="io-analytics"></v-icon>
                    <div class="item-text">Focus Analysis</div>
                </div>
            </router-link>
            <router-link to="/resources">
                <div class="menu-item">
                    <v-icon class="item-icon" name="hi-document-report"></v-icon>
                        <div class="item-text">Resources</div>
                </div>
            </router-link>
            <router-link to="/my-page">
                <div class="menu-item">
                    <v-icon class="item-icon" name="hi-document-report"></v-icon>
                        <div class="item-text">My Page</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    width: 100%;
}

.menu {
    display: flex;
    flex-direction: column;
    width: 10%;
}

.menu-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: rgb(155, 155, 156);
    padding: 1.5vh 0 0 0 ;
    transition: all linear 0.1s;
}

.menu-item.active {
    color: white;
}

.menu-item:hover {
    color: white
}

.item-text {
    border-radius: 10px;
    width: fit-content;
    padding: 0.5vh;
    font-size: 1rem;
}
</style>
