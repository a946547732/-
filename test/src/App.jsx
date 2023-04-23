import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import './App.css'

function App() {

  const eventClick = (info) => {
    console.log(info.event)
  }
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        // themeSystem='darkly'
        locale='zh-cn'
        events={[
          { title: '长空之王', start: '2023-04-10', end: '2023-04-15', color: 'red', },
          { title: '长空之王2', start: '2023-04-20', end: '2023-05-18', color: 'green', },
          { title: '重紫', start: '2023-04-20', color: 'blue', }
        ]}
        headerToolbar={{
          // prev next today
          left: '',
          center: 'title',
          right: 'prev,next'
        }}
        eventClick={eventClick}
      />
    </div>
  );
}

export default App;
