<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Film</h3>

    <label for="title">Movie title:</label>
    <input type="text" name="title" v-model="title" required>

    <label for="author">Film author:</label>
    <input type="text" name="author" v-model="author" required>

    <button>Add Film</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase/config'
import { addDoc, collection } from 'firebase/firestore'
import getUser from '@/composables/getUser'
export default {
  setup() {
    const title = ref('')
    const author = ref('')
    const { user } = getUser()

    const handleSubmit = async () => {
      const colRef = collection(db, 'books')
      await addDoc(colRef, {
        title: title.value,
        author: author.value,
        isFav: false,
        userId: user.value.uid
      })
      title.value = ''
      author.value = ''
    }

    return { handleSubmit, title, author }
  }
}
</script>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>