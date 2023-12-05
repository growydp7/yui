/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-12-04 16:13:53
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-04 16:57:26
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\demo\loading.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Button from '../index'
import { PoweroffOutlined } from '@ant-design/icons'

const App = () => {
  const [loadings, setLoadings] = React.useState<boolean[]>([])

  const handleClick = (index: number) => {
    setLoadings(previousLoadings => {
      const newLoadings = [...previousLoadings]
      newLoadings[index] = true
      return newLoadings
    })

    setTimeout(() => {
      setLoadings(previousLoadings => {
        const newLoadings = [...previousLoadings]
        newLoadings[index] = false
        return newLoadings
      })
    }, 6000)
  }
  return (
    <div>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" size="small" loading>Loading</Button>
      <div>
        <Button
          type="primary"
          loading={loadings[0]}
          onClick={() => handleClick(0)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => handleClick(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => handleClick(2)}
        />
      </div>
    </div>
  )
}

export default App