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
        theme='lux'
        locale='zh-cn'
        events={[
          { title: '长空之王', start: '2023-04-10', end: '2023-04-15', color: 'red', },
          { title: '长空之王2', start: '2023-04-11', end: '2023-04-18', color: 'green', },
          { title: '重紫', date: '2023-04-20' }
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
