/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-12-05 09:46:17
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-05 09:49:32
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\demo\ghost.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Button from '../index'

const App: React.FC = () => (
  <div>
    <Button type="primary" ghost>Primary</Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="primary" danger ghost>Danger</Button>
  </div>
)

export default App