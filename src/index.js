import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './pages/App/App'
// import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'
import { BackgroundScrollProvider } from './components/Context/BackgroundScrollContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<ChakraProvider theme={theme}>
				<BackgroundScrollProvider>
					<App />
				</BackgroundScrollProvider>
			</ChakraProvider>
		</Router>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
