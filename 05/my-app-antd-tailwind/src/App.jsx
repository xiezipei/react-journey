import './App.css'
import { Button, message } from 'antd'

function App() { 

  const [messageApi, contextHolder] = message.useMessage();

  const showInfo = () => {
    messageApi.info('Hello, Ant Design!');
  };

  return (
    <>
      <div className="App">
        {/* 验证 antd */}
        {contextHolder}
        <Button type='primary' onClick={showInfo}>Antd 按钮</Button>
        {/* 验证 tailwind */}
        <h1 class="text-3xl font-bold underline">
          Hello Tailwind!
        </h1>
      </div>
    </>
  )
}

export default App
