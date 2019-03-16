import React, {Component} from 'react'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import {IntlProvider, FormattedMessage} from 'react-intl'
import {Provider as ReduxProvider, connect} from 'react-redux'
import {Document, Page, View, Text, PDFViewer} from '@react-pdf/renderer'


const store = createStore(state => state)

const Connected = connect(state => ({state}))(props => console.log('state', props.state) || props.children)

class App extends Component {
  render() {
    return (
      <div className="App">
        <PDFViewer>
          <Document>
            <Page>
              <View>
                <Text>
                  <FormattedMessage id="test">{s => s}</FormattedMessage>
                </Text>
              </View>
              <View>
                <Text>
                  <Connected>
                    Redux connected component Test
                  </Connected>
                </Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    )
  }
}

ReactDOM.render(
  <ReduxProvider store={store}>
    <IntlProvider locale="en" messages={{en: {id: "test", defaultMessage: "React PDF Test"}}}>
      <App/>
    </IntlProvider>
  </ReduxProvider>,
  document.getElementById('root'),
)
