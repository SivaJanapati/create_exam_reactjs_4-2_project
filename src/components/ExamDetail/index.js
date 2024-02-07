import './index.css'

const ExamDetail=()=>{
    return(
        <div className='exam-detail-conatiner'>
            <select className='select-input-box' name="examType"  >
                <option value="" disabled selected hidden>Select Exam Type</option>
                <option value="10">10 Questions Paper</option>
                <option value="15">15 Questions Paper</option>
                <option value="20">20 Questions Paper</option>
                <option value="30">30 Questions Paper</option>
            </select>
            <select className='select-input-box' name="subject"  >
                <option value="" disabled selected hidden>Select Subject</option>
                <option value="java">Java</option>
                <option value="c">C</option>
                <option value="c++">C++</option>
                <option value="python">python</option>
            </select>
            <select className='select-input-box' name="class" >
                <option value="" disabled selected hidden>Select Class</option>
                <option value="ai&ml">AI&ML</option>
                <option value="iot">IOT</option>
                <option value="cse">CSE</option>
                <option value="it">IT</option>
            </select>
            <select className='select-input-box' name="section" >
                <option value="" disabled selected hidden>Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <input type="text" className='marks-input' placeholder='Enter Total Marks'  />
            <div className='date-input-box'><label className='label' for="date">Date</label><input id="date" className="date-field" type="date"/></div>
            <div className='duration-input-box'>
                <label className='label' for="duration">Test Duration</label>
                <div className='duration-field'>
                    <input className="input-duration" type="text" value="0"/>
                    <span className='span'>hours</span>
                </div>
                <div className='duration-field'>
                    <input className="input-duration" type="text" value="30"/>
                    <span className='span'>mins</span>
                </div>
            </div>
            <div className='buttons-field'>
                <button className='save-btn'>Save</button>
                <button className='reset-btn'>Reset</button>
            </div>
            
        </div>
    )
}

export default ExamDetail