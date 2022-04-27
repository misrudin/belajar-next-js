import Cookies from 'js-cookie'

const Login = () => {


    const login = () => {
        Cookies.set('token', 'asjdlaudhalsudyqwgqwdajkhsdgkyasgewauygdjhasd')
        window.location.reload()
    }

    return (
        <div>
            <h5>LOGIN - PAGE - HAI</h5>
            <button onClick={login}>Login</button>
        </div>
    )
}


export default Login