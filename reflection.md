Why is context useful?
=> context helps pass global states in deeply nested components, thus, reducing the redundant props passing from parent to child (prop drilling)
How is it different from local state?
=> unlike local state, context is global: you define it whithin the top parent component to ensure that is can be passed down to other children whenever neeeded.
What would prop drilling look like here?
=> an example of prop drilling would be the following:


//main component file:

    const compoenent1 = () => {

        const [state, setState] = useState(defaultValue);

        return(
            <>
                display: {state}
                <component2  props={state}/>
                <component3  props={state}/>
            </>
        )

    }


//child component file:

 const compoenent3 = (stateVariable) => {

   

        return(
            <>
                display: {stateVariable}

                <component5  props={state}/>
                <component6  props={state}/>

                etc... 
            </>
        )

    }
