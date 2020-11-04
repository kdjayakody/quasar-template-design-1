import axios from 'axios'


export default function ({
  store
}) {
  store.subscribe((mutation) => {
    switch (mutation.type) {
      case 'auth/SET_TOKEN':
        if (mutation.payload) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
          localStorage.setItem('token', mutation.payload)
        } else {
          axios.defaults.headers.common['Authorization'] = null
          localStorage.removeItem('token', mutation.payload)
        }

        break;
    }
  })

  store.dispatch('auth/attempt', localStorage.getItem('token'))
}
