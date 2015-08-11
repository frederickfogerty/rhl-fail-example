import DocumentTitle from 'react-document-title'
import React from 'react/addons'
import Comments from '../components/Comments'

// import 'font-awesome/css/font-awesome.css'
import '../lib/touchstone.less'
import './App.css'

export default class App extends React.Component {
  render () {
    return (
    <div>
      <DocumentTitle title='HOLIS'>
        <Comments data={[
          {
            comment_id: 5,
            body: 'Something',
            user: {
              name: 'Frederick',
            }
          },
          {
            comment_id: 6,
            body: 'Something',
            user: {
              name: 'Frederick',
            }
          },
          {
            comment_id: 7,
            body: 'Something',
            user: {
              name: 'Frederick',
            }
          },
          {
            comment_id: 8,
            body: 'Something',
            user: {
              name: 'Frederick',
            }
          },
          ]}
          expanded={true}
          />
      </DocumentTitle>
    </div>
    )
  }
}

