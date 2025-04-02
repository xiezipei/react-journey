import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import '@ant-design/v5-patch-for-react-19'; // 加这个静态方法才生效
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <StyleProvider layer>
      <ConfigProvider>
        <App /> 
      </ConfigProvider>
     </StyleProvider>
  </StrictMode>,
)
