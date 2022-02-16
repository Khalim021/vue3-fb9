import { ref } from 'vue'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const user = ref(auth.currentUser)

// auth changes
onAuthStateChanged(auth, (_user) => {
    console.log('User state changed. Current user is:', _user)
    user.value = _user
})

const getUser = () => {
    return { user }
}
export default getUser









