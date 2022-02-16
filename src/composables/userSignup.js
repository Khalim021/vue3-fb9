import { ref } from 'vue'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)
const isPanding = ref(false)

const signup = async (email, password) => {
    error.value = null
    isPanding.value = true

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
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
const useSignup = () => {
    return { error, isPanding, signup }
}
export default useSignup




