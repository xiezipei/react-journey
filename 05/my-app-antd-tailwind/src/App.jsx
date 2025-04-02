import './App.css'
import { Button, message } from 'antd'

function App() { 

  const [messageApi, contextHolder] = message.useMessage();

  const showInfoByHook = () => {
    messageApi.info('Hello, Ant Design!');
  };

  const showInfoByStaticMethod = () => {
    // 需在 main.jsx 引入 import '@ant-design/v5-patch-for-react-19';
    message.info('This is a normal message');
  };

  return (
    <>
      <div className="App">
        {/* 验证 antd */}
        {contextHolder}
        <Button type='primary' className='bg-amber-700' onClick={showInfoByHook}>Antd 按钮(Hook)</Button>
        <br /><br />
        <Button type='primary' onClick={showInfoByStaticMethod}>Antd 按钮(静态方法)</Button>
        <br /><br />
        {/* 验证 tailwind */}
        <h1 class="text-3xl font-bold underline">
          Hello Tailwind!
        </h1>
      </div>
    </>
  )
}

export default App
