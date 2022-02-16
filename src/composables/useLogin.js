import { ref } from 'vue'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)
const isPanding = ref(false)

const login = async (email, password) => {
    error.value = null
    isPanding.value = true

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not complete')
        }
        error.value = null
        isPanding.value = false
    } catch(err) {
        console.log(err.message)
        error.value = err.message
        isPanding.value = false
    }
}
const useLogin = () => {
    return { error, isPanding, login }
}
export default useLogin

