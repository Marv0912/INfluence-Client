
const Login = () => {
  return (
    <div>
      const [user, setUser] = useState({
        email: "",
        password: "",

    })
    const navigate = useNavigate()

    const { storeToken. authenticateUser } = useContext(AuthContext)

    const handleTextInput = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        post('/auth/signup', user)
        .then((response) => {
            storeToken(response.data)
            authenticateUser()
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Signup</h1>
            <form action="">
                <label >
                    Username
                    <input name="username" type="text" value={newUser.username} onChange={handleTextInput}/>
                </label>
                <label >
                    Email
                    <input name="email" type="email" value={newUser.email} onChange={handleTextInput}/>
                </label>
                <label >
                    Password
                    <input name="password" type="password" value={newUser.password} onChange={handleTextInput}/>
                </label>
                <button type='submit' >Login</button>
            </form>
        </div>
    );
    </div>
  );
}

export default Login;
