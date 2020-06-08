<template lang="pug">
    .d-flex
        v-text-field(v-model="city" placeholder="City.." solo hide-details)
        v-btn.align-center.ml-2(icon x-large)
            v-icon mdi-magnify
</template>

<script>
export default {
    data: () => ({
        city: '',
    })
}
</script>