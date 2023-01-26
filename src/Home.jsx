const Home = () => {

    const handleClick = (e) => {
           console.log('button clicked!', e.target)     
    }
    const handleClickAgain = (name, e) => {
           console.log(`Hi there ${name}!`, e.target)     
    }

    return ( 
        <div className="home">
            
            <h2>Homepage</h2>

            {/* pass a function ref to the onClick event: */}
            <button onClick={handleClick}>Click me!</button> 
            <button onClick={(e) => handleClickAgain('John',e)}>Click me again!</button> 

        </div>
     );
}
 
export default Home;