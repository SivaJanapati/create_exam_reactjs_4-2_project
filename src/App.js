import Header from './components/Header'
import ExamDetail from './components/ExamDetail';
import McqTemplate from './components/McqTemplate';
import PreviewQuestionPaper from './components/PreviewQuestionPaper';
import './App.css';

const App=()=> {
  return(
    <div className='create-exam-page'>
      <Header className="header"/>
      <div className='create-exam-page-body'>
          <div className='body-container'>
            <div className='body-sub-containers'>
              <h1 className='body-container-heading'>Exam Details</h1>
              <ExamDetail />
            </div>
            <div className='body-sub-containers'>
              <h1 className='body-container-heading'>MCQ Template</h1>
              <McqTemplate/> 
            </div>
            <div className='body-sub-containers'>
              <h1 className='preview-body-container-heading'>Preview Question Paper</h1>
              <PreviewQuestionPaper/>   
            </div>
          </div>
          <div className='email-notifaction-line'>
            <input type='checkbox' className='check-box'/>
            <p className='notification-para'>Notify all students through email?</p>
          </div>
      </div>
    </div>
  )
}

export default App;
