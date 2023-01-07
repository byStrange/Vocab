<template>
    <div class="panel">
        <button class="btn"  @click="showTopics">topics</button>
        <button class="btn"  ref="listBtn" @click="showList">List</button>
    </div>
</template>

<script>
    export default {
        name: 'Nav',
        methods: {
            showList() {
                this.$emit('showList');
            },
            showTopics() {
                this.$emit('showTopics');
            },
        },
    }
</script>