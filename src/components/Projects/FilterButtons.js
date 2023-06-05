

export default function FilterButtons({projectDisplay, setProjectDisplay}){

    let filterButtons = ["ReactJS", "API", "Design", "All"];

    const handleClick = (e) => {
        setProjectDisplay(e.target.value)
        console.log(projectDisplay)
    }

        let filterDisplay = filterButtons.map((filter,index) => {

            return (
                  <div className="">
                    <div className="">
                        <input key={index} onClick={handleClick} name="categoryRadio" className="form-check-input x m-3" type="radio" value={filter} id={filter}></input>
                        <label  className="btn btn-outline-light" for={filter} value={filter}>{filter}</label>
                    </div>
                  </div>
            )
        })
        return <>{filterDisplay}</>
    }
