import "./index.css"

const McqTemplate=()=>{
    return(
        <div className='mcq-template-conatiner'>
            <input type="text" className='mcq-input-box' placeholder='Enter Question'  />
            <input type="text" className='mcq-input-box' placeholder='Enter Option a'  />
            <input type="text" className='mcq-input-box' placeholder='Enter Option b'  />
            <input type="text" className='mcq-input-box' placeholder='Enter Option c'  />
            <input type="text" className='mcq-input-box' placeholder='Enter Option d'  />
            <select name="correctoption" className="select-input-box">
                <option value="" disabled selected hidden>Correct Option</option>
                <option value="a">Option a</option>
                <option value="b">Option b</option>
                <option value="c">option c</option>
                <option value="d">option d</option>
            </select>
            <input type="text" className='mcq-input-box' placeholder='Enter Marks'  />
            <div className='buttons-field'>
                <button className='add-btn'>Add</button>
                <button className='reset-btn'>Reset</button>
            </div>
            
        </div>
    )
    
}

export default McqTemplate