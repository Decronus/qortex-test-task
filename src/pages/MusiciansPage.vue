<template>
    <h3 class="q-mb-lg">Исполнители</h3>
    <q-list bordered>
        <q-item
            clickable
            v-ripple
            v-for="(musician, index) in $store.state.data.musicians"
            :key="index"
        >
            <q-item-section avatar class="q-mr-none">
                <q-icon name="audiotrack" />
            </q-item-section>
            <q-item-section>{{ musician }}</q-item-section>
        </q-item>
    </q-list>
</template>

<script>
export default {};
</script>

<style></style>
