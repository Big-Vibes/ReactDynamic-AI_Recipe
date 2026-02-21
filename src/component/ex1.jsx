{/* To Study How Event works */}
    {/* <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main> */}


    {/* UseState Method in React */}

    {/* <main className="UseStates">
    <h1 className="title">Is state important to know?</h1>
    <button className="value" onClick={HandleClick}> {Result} </button>
    </main> */}

        {/* <main className="UseStatecontainer">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={Subtract} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count" >{Value}</h2>
                <button onClick={Add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main> */}

         {/* <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
            aria-label={`Current answer is ${Question ? "Yes":"No"}. Click to change it.`}
            onClick={Anwsers} 
            className="value"
            >{Question ? "Yes":"No"}
            </button>
        </main> */}

        {/* TO UPDATE ARRAY AND OBJECT USING USESTATE */}
        {/* <main className="ArrayUpdate">
      <button 
      className="ArrayUpdateBTN"
      onClick={addFavoriteThing}
      > Add item
      </button>
      <section 
      aria-live="polite"
      > {thingsElements} 
      </section>
    </main> */}


 {/* Form in React */}
{/* <section>
      <h1>Signup form</h1>
      <form
      action={SignUp}
      // onSubmit={HandleSubmit}
      // method="post"
      >
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@gmail.com" />
          
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>


      </form>
    </section> */}



    
      // export default function App( { darkMode}){
    
      //  function handleClick(){
      //   console.log("I was Clicked")
      // }    
      // function handleMouseOver () {
      //   console.log("I was over")
      // }
        
      // Usestate in React
      // let [Result, setResult ] = React.useState("Damn")
      // function HandleClick (){
      //   setResult('Yes')
      // }
    
    // const [Value, setValue]= React.useState(0)
    // function Add(){
    //   setValue(prevValue => prevValue +1)
    // }  
    // function Subtract(){
    //   setValue(prevValue => prevValue -1)
    // }
    
      // To Use Ternaty Operators
      // const isGoingOut = false;
       
      // let [Question, setQuestion]= React.useState(true)
      // function Anwsers(){
      //   setQuestion (prev => !prev )
      // }
    
      /* TO UPDATE ARRAY AND OBJECT USING USESTATE */
      // const [myFavoriteThings,setmyFavoriteThings] = React.useState([])
      // const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
      // "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
      //  const thingsElements = myFavoriteThings.map(thing => <p key={thing}> {thing} </p>)
      // function addFavoriteThing() {
      //   setmyFavoriteThings(prevFavThings =>[...prevFavThings,allFavoriteThings[prevFavThings.length]])
      // }
    
      //  Form in React 
    
          //NOTE: looks more Imperative
      // function HandleSubmit(event) {
      //   event.preventDefault()
      //   const formEl = event.currentTarget
      //   const formData = new FormData(formEl)
      //   const email = formData.get("email")
      //   console.log(email)
        // N: Gather the info from the form
        // N: Submit it to a backend
      //   formEl.reset()
      // }
    
      // New way (Controlled component)
    //   function SignUp(FormData){
    //     const email = FormData.get("email")
    //     const password = FormData.get("password")
    //     console.log(email)
    //     console.log(password)
    //   }
    
    
    // const Styles = { backgroundColor : darkMode ? "#222222" : "#cccccc" }
    
    
    