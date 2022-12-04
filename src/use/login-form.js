import { useForm, useField } from 'vee-validate';
import { useStore, mapGetters } from 'vuex';
import { useRouter } from 'vue-router';
import * as yup from 'yup';

export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const { handleSubmit, isSubmitting, submitCount } = useForm({
        initialValues: {
            email: 't@gmail.com'
        }
    });

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField('email', yup.string().trim().required().email());
    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password');
    console.log(submitCount, isSubmitting, 'sss')

    const onSubmit = handleSubmit(async values => {
        console.log(values);
        console.log(store, 'the store');
        await store.dispatch('auth/login', values)
        router.push('/')
    })

    const {token} = mapGetters(['token']);

    console.log(token, 'token')

    return { email, password, eError, pError, eBlur, pBlur, onSubmit, isSubmitting }
}
