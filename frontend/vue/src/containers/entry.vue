<template>
    <div>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="news">News</router-link>
            </li>
            <li>
                <router-link to="music">Music</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Entry'
    };
</script>
