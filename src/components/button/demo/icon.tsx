import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Button from '../index'

const App: React.FC = () => (
  <div>
    <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button shape="circle" icon={<SearchOutlined />} />
    <Button icon={<SearchOutlined />}>Search</Button>
    <Button shape="circle" icon={<SearchOutlined />} />
    <Button icon={<SearchOutlined />}>Search</Button>
    <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />} href="https://www.google.com" />
  </div>
)

export default App