import React, { useState } from 'react'
import Button from '../index'

import { SizeType } from '../../config-provider/SizeContext'

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large')
  const [sizeLists] = useState<SizeType[]>(['large', 'middle', 'small'])
  return (
    <div>
      <div>
        {
          sizeLists.map(item => <Button onClick={() => setSize(item)}>{item}</Button>)
        }
      </div>
      <div>
        <Button size={size}>button</Button>
      </div>
    </div>
  )
}

export default App