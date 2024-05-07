<template>
  <div class="list">
    <ul>
      <li v-for="item in items" :key="item.id" @click="click(item.name)">
        {{ item.name }}
      </li>
    </ul>
    <input type="text" placeholder="请输入事项" @keyup.enter="addToList" v-model="newThing">
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ],
      newThing: '' // 添加这一行来定义newThing属性
    };
  },
  methods: {
    click(name) {
      this.$router.push({
        path: `/home/chosen/${name}`
      });
    },
    addToList() {
      if (this.newThing.trim() !== '') {
        this.items.push({ name: this.newThing }); // 如果你想保留id属性，你需要生成一个新的唯一id
        this.newThing = '';
      }
    }
  }
};
</script>

<style scoped>
.list{
    left: 50%;
    color: chocolate;
  }
</style>