
import "./index.css"

const data = {queNo:1,que:"who are you?",opt_a:"Human",opt_b:"God",opt_c:"Devil",opt_d:"I Don't Know"};


const PreviewQuestionPaper=()=>{
    
    return(
        <div className="preview-paper-container">
            <div className="question-preview">
                <div className="question-box">
                    <p className="question-number">Question Number {data.queNo}</p>
                    <p className="question">{data.queNo}) {data.que}</p>
                    <div className="radio-option-field"><input name="options"  className="option-input" type="radio" value={data.opt_a} id="opt-a"/><label className="option-name" for="opt-a">a) {data.opt_a}</label></div>
                    <div  className="radio-option-field"><input name="options"  className="option-input" type="radio" value={data.opt_b} id="opt-b"/><label className="option-name" for="opt-b">b) {data.opt_b}</label></div>
                    <div className="radio-option-field"><input name="options"  className="option-input" type="radio" value={data.opt_c} id="opt-c"/><label className="option-name" for="opt-a">c) {data.opt_c}</label></div>
                    <div className="radio-option-field"><input name="options" className="option-input" type="radio" value={data.opt_d} id="opt-d"/><label className="option-name" for="opt-a">d) {data.opt_d}</label></div>   
                </div>
            </div>
            <div className="buttons-field">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
                <button className="upload-btn">Upload</button>
            </div>
           
        </div>
    )
}

export default PreviewQuestionPaper