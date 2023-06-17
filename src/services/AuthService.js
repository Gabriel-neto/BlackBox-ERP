import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { app } from "./FirebaseConfig"

const auth = getAuth(app)

export async function Login(email, senha) {
    return await signInWithEmailAndPassword(auth, email, senha)
        .then((useCredential) => userCredential.user.uid)
        .catch((error) => {
            if (error.code == 'auth/wrong-password') {
                throw Error('Senha inválida')
            } else if (error.code == 'auth/user-not-found') {
                throw Error('Usuário não encontrado')
            }
        })
}

export async function criarLogin(email, senha) {
    return await createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user
        })

        .catch((error) => {
            console.error('Usuário de autenticação não cadastrado', error)
        })
}

export async function Logout() {
    await signOut(auth)
}